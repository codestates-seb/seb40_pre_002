package pre_002.stackOverFlow_Clone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre_002.stackOverFlow_Clone.user.dto.UserDto;

import java.sql.Timestamp;
import java.time.LocalDateTime;


public class AnswerDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{
      private Long questionId;
      private String answerContents;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long answerId;
        private String answerContents;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long answerId;
        private String answerContents;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private UserDto.Response user;
    }
}
