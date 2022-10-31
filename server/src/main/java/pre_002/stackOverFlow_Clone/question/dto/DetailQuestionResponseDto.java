package pre_002.stackOverFlow_Clone.question.dto;

import lombok.*;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.dto.MultiResponseDto;
import pre_002.stackOverFlow_Clone.user.dto.UserDto;
import pre_002.stackOverFlow_Clone.user.entity.User;

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
    private int view;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private UserDto.Response user;
    private MultiResponseDto<AnswerDto.Response> answers;
}
