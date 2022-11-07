package pre_002.stackOverFlow_Clone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        private String questionTitle;
        private String questionContents;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private Long questionId;
        private String questionTitle;
        private String questionContents;
    }
}
