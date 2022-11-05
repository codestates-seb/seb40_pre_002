package pre_002.stackOverFlow_Clone.user.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import pre_002.stackOverFlow_Clone.user.dto.UserDto;
import pre_002.stackOverFlow_Clone.user.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserDto.Post userPostDto);
    User userPatchDtoToUser(UserDto.Patch userPatchDto);
    UserDto.Response userToUserResponseDto(User user);
}
