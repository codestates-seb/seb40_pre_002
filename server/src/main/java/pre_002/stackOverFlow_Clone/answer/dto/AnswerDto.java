package pre_002.stackOverFlow_Clone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

public class AnswerDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private long answerId;
        private List<Answer> answerList;
        private LocalDateTime createdAt;
        private Timestamp modifiedAt;
    }
}
