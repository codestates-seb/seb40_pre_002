package pre_002.stackOverFlow_Clone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;


@Getter
@AllArgsConstructor
public class UserPostDto {
    private String email;
    private String userName;
    private String password;
}
