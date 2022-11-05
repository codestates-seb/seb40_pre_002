package pre_002.stackOverFlow_Clone.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;


public class UserDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private String email;
        @NotBlank
        private String userName;
        @NotBlank
        private String password;

        public Post(String email, String userName, String password) {
            this.email = email;
            this.userName = userName;
            this.password = password;
        }
    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{
        private Long userId;
        private String userName;
        private String password;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private Long userId;
        private String email;
        private String userName;
    }
}
