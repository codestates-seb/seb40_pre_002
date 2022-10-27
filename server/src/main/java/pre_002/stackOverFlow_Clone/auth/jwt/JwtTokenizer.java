package pre_002.stackOverFlow_Clone.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

@Component
public class JwtTokenizer {
    @Getter
//    @Value("${jwt.secret-key}")
    private String secretKey;       //JWT 생성 및 검증 시 사용되는 Secret Key 정보

    @Getter
//    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;       // Access Token 만료 시간 정보

    @Getter
//    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;      // Refresh Token 만료 시간 정보입니다

    // Plain Text 형태인 key의 byte[]를 Base64 형식 문자열로 인코딩
    public String encodeBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    // JWT(Access 토큰) 생성 메서드
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey){

        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);   // 디코딩 후 HMAC 알고리즘를 적용한 Key 객체

        return Jwts.builder()
                .setClaims(claims)      // 주로 인증된 사용자와 관련된 정보를 추가
                .setSubject(subject)    // JWT 제목 추가
                .setIssuedAt(Calendar.getInstance().getTime())      // 발행일자 설정
                .setExpiration(expiration)      // 만료일시 지정
                .signWith(key)      // 서명을 위핸 객체 설정
                .compact();     // 생성 및 직렬화(byte 형태로 데이터를 변환)
    }

    // Access 토큰이 만료되었을 경우, 새로 생성할 수 있게 해주는 메서드(Refresh Token)
    public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        // 최초 토큰 생성과 같고, 새로 발급해주는 역할이기 때문에 Claims는 제외
        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
        return claims;
    }



    // JWT 서명에 사용할 Secret Key 생성
    private Key getKeyFromBase64EncodedKey(String base64EncoderSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncoderSecretKey);    // Base64 형식으로 인코딩 된 Secret Key를 디코딩한 것을 key byte array로 선언
        Key key = Keys.hmacShaKeyFor(keyBytes);     // key byte array에 HMAC 알고리즘를 적용한 Key 객체 생성

        return key;
    }


}
