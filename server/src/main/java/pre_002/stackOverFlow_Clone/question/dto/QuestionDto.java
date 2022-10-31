package pre_002.stackOverFlow_Clone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.Valid;
import java.time.LocalDateTime;

public class QuestionDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @Valid
        private String questionTitle;

        @Valid
        private String questionContents;
    }

    @Getter
    @Setter
    @NoArgsConstructor
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
        private int view;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
