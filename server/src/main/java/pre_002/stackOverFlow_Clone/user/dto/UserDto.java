package pre_002.stackOverFlow_Clone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class Post {

        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String userName;

        @NotBlank
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long userId;
        private String email;
        private String userName;
    }


}
