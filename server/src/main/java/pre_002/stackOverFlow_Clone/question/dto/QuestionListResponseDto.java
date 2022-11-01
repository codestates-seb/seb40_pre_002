package pre_002.stackOverFlow_Clone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
public class QuestionListResponseDto {
    private Long questionId;
    private String questionTitle;
    private String questionContents;
    private Integer views;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Timestamp createdAnsweredAt;
    private Timestamp modifiedAnsweredAt;
}
