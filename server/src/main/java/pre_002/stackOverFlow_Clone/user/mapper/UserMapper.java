package pre_002.stackOverFlow_Clone.user.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import pre_002.stackOverFlow_Clone.user.dto.UserPostDto;
import pre_002.stackOverFlow_Clone.user.dto.UserResponseDto;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.repository.UserRepository;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    UserResponseDto userToUserResponseDto(User user);
}
