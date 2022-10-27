package pre_002.stackOverFlow_Clone.user.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import pre_002.stackOverFlow_Clone.user.dto.UserDto;
import pre_002.stackOverFlow_Clone.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-27T21:00:13+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserDto.Post userPostDto) {
        if ( userPostDto == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( userPostDto.getEmail() );
        user.setUserName( userPostDto.getUserName() );
        user.setPassword( userPostDto.getPassword() );

        return user;
    }

    @Override
    public UserDto.Response userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        Long userId = null;
        String email = null;
        String userName = null;
        String password = null;

        userId = user.getUserId();
        email = user.getEmail();
        userName = user.getUserName();
        password = user.getPassword();

        UserDto.Response response = new UserDto.Response( userId, email, userName, password );

        return response;
    }
}
