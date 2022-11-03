package pre_002.stackOverFlow_Clone.question.dto;

import lombok.*;
import pre_002.stackOverFlow_Clone.user.dto.UserDto;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class DetailQuestionResponseDto {
    private Long questionId;
    private String questionTitle;
    private String questionContents;
    private int view;
    private int vote;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private UserDto.Response user;
}
