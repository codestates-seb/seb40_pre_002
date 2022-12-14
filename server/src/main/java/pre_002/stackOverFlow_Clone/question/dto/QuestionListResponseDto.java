package pre_002.stackOverFlow_Clone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;

@Getter
@AllArgsConstructor
@Builder
public class QuestionListResponseDto {
    private Long questionId;
    private String questionTitle;
    private String questionContents;
    private Integer views;
    private int vote;
    private Integer countAnswer;
    private ZonedDateTime createdAt;
    private ZonedDateTime modifiedAt;
    private Timestamp createdAnsweredAt;
    private Timestamp modifiedAnsweredAt;
    private String username;
}
