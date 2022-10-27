package pre_002.stackOverFlow_Clone.user.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import pre_002.stackOverFlow_Clone.user.dto.UserPostDto;
import pre_002.stackOverFlow_Clone.user.dto.UserResponseDto;
import pre_002.stackOverFlow_Clone.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-26T10:59:14+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserPostDto userPostDto) {
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
    public UserResponseDto userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        return userResponseDto;
    }
}
