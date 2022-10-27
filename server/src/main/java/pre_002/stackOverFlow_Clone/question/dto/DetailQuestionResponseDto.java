package pre_002.stackOverFlow_Clone.question.dto;

import lombok.*;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailQuestionResponseDto {
    private Long questionId;
    private String questionTitle;
    private String questionContents;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private LocalDateTime answeredAt;
    private List<AnswerDto> answers;
}
