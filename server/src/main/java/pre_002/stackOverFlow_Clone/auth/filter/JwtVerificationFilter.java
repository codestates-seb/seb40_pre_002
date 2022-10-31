package pre_002.stackOverFlow_Clone.auth.filter;


import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import pre_002.stackOverFlow_Clone.auth.jwt.JwtTokenizer;
import pre_002.stackOverFlow_Clone.auth.utils.CustomAuthorityUtils;


import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
public class JwtVerificationFilter extends OncePerRequestFilter {   // OncePerRequestFilter -> JWT 검증은 요청당 한번만 수행하면 되므로 전용 Filter로 사용하기 적절
    private final JwtTokenizer jwtTokenizer;    // JWT 검증 및 토큰에 포함된 정보인 Claims를 얻는데 사용
    private final CustomAuthorityUtils authorityUtils;      // 검증 성공 후 Authentication 객체에 채울 사용자의 권한을 생성하는데 사용

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)throws ServletException, IOException{
        try{
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);     // Security Context에 Authentication을 저장
        } catch (SignatureException signatureException) {
            request.setAttribute("exception", signatureException);
        } catch (ExpiredJwtException expiredJwtException) {
            request.setAttribute("exception", expiredJwtException);
        } catch (Exception exception) {
            request.setAttribute("exception", exception);
        }
        filterChain.doFilter(request, response);    // 다음 Filter 호출
    }

    //  특정 조건에 부합(true)이면 해당 Filter를 스킵하고 다음 Filter로 건너뜀
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");      // 요청 Header의 Authorization 값을 가져옴
        return authorization == null || !authorization.startsWith("Bearer");        // Header 값이 null OR  “Bearer”로 시작하지 않으면
    }

    // JWT 검증 메서드
    private Map<String, Object> verifyJws(HttpServletRequest request){
        // jws = JSON Web Token Signed
        String jws = request.getHeader("Authorization").replace("Bearer ", "");      // request header에서 JWT 추출, JWT Header(type: "Bearer') 제거
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());        // 검증하기 위한 인코딩된 Secret Key
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();     //  jwt Claims 부분 파싱

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims){
        String username = (String)claims.get("username");
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
