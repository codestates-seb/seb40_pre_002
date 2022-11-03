package pre_002.stackOverFlow_Clone.question.vote.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class QuestionVoteResponseDto {
    private int vote;
    private List<Long> voteUpUsers;
    private List<Long> voteDownUsers;
    private Long questionId;
}
