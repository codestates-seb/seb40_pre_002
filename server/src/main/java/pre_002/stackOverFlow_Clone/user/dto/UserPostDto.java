package pre_002.stackOverFlow_Clone.user.dto;

import lombok.Getter;

import javax.persistence.Column;

@Getter
public class UserPostDto {
    private String email;
    private String userName;
    private String password;
}
