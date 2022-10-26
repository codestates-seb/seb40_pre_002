package pre_002.stackOverFlow_Clone.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.repository.UserRepository;
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }
}
