package pre_002.stackOverFlow_Clone.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.auth.utils.CustomAuthorityUtils;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.exception.ExceptionCode;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        return userRepository.save(user);
    }


    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

}
