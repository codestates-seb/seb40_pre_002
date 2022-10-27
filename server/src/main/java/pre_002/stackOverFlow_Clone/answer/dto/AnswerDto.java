package pre_002.stackOverFlow_Clone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;

import java.sql.Timestamp;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerDto {
    private Long answerId;
    private String answerContents;
//    private QuestionDto question;
    private Timestamp createdAt;
    private Timestamp modifiedAt;
}
