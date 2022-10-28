package pre_002.stackOverFlow_Clone.auth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

//User 권한 생성
@Component
public class CustomAuthorityUtils {

//    @Value("${mail.address.admin}")     // .yml에 추가한 관리자(admin) 지정 이메일
    private String adminMailAddress;


    // 관리자용 권한 목록 생성
    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "USER");

    // 일반 사용자용 권한 목록 생성
    private final List<String> USER_ROLES_STRING = List.of("USER");


    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    public List<String> createRoles(String email) {
        if (email.equals(adminMailAddress)) {
            return ADMIN_ROLES_STRING;
        }
        return USER_ROLES_STRING;
    }
}
