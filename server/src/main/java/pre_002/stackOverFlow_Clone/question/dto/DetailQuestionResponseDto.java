package pre_002.stackOverFlow_Clone.question.dto;

import lombok.*;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;

import java.time.LocalDateTime;

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
    private Page<Answer> answers;
}
