package pre_002.stackOverFlow_Clone.question.dto;

import lombok.*;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class QuestionDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        private String questionTitle;
        private String questionContents;
//        private Long userId;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private Long questionId;
        private String questionTitle;
        private String questionContents;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long questionId;
        private String questionTitle;
        private String questionContents;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
