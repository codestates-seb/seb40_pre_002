package pre_002.stackOverFlow_Clone.auth.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import pre_002.stackOverFlow_Clone.auth.dto.LoginDto;
import pre_002.stackOverFlow_Clone.auth.jwt.JwtTokenizer;
import pre_002.stackOverFlow_Clone.user.entity.User;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


// UsernamePasswordAuthenticationFilter는 폼로그인 방식에서 사용하는 디폴트 Security Filter -> Username/Password 기반의 인증을 처리하기 위해 확장 구현
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;      // Username/Password를 전달 받아 UserDetailsService와 상호작용 후 인증 여부를 판단하는 역할
    private final JwtTokenizer jwtTokenizer;        // 클라이언트가 인증 성공하면 JWT를 생성하고 발급하는 역할

    // 메서드 내부 인증
    @SneakyThrows   // 명시적인 예외 처리를 생략(throws나 try-catch 구문 셍략) ->  request.getInputStream()의 throws 구문 생략 위해
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {

        ObjectMapper objectMapper = new ObjectMapper();     // 역직렬화 위해 ObjectMapper 인스턴스를 생성 (JSON 형식을 사용할 때, 직렬화, 역직렬화 할때 ObjectMapper 사용)
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);   // ServletInputStream을 LoginDto 객체로 역직렬화

        // Username과 Password 정보를 포함한 UsernamePasswordAuthenticationToken을 생성
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        return authenticationManager.authenticate(authenticationToken);     // AuthenticationManager에게 UsernamePasswordAuthenticationToken 전달
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws ServletException, IOException {
        User user = (User) authResult.getPrincipal();   // 인증

        String accessToken = delegateAccessToken(user);
        String refreshToken = delegateRefreshToken(user);

        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh", refreshToken);

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }

    private String delegateAccessToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", user.getEmail());
        claims.put("roles", user.getRoles());

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(User user) {
        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}

