package pre_002.stackOverFlow_Clone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionListResponseDto {
    private Long questionId;
    private String questionTitle;
    private String questionContents;
    private Integer views;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private LocalDateTime answeredAt;

}
