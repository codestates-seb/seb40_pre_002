package pre_002.stackOverFlow_Clone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.dto.MultiResponseDto;
import pre_002.stackOverFlow_Clone.user.dto.UserDto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
