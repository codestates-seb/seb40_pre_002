package pre_002.stackOverFlow_Clone.question.vote.mapper;

import org.mapstruct.Mapper;
import pre_002.stackOverFlow_Clone.question.vote.dto.QuestionVoteResponseDto;
import pre_002.stackOverFlow_Clone.question.vote.entity.QuestionVote;

@Mapper(componentModel = "spring")
public interface QuestionVoteMapper {
    default QuestionVoteResponseDto entityToResponse(QuestionVote questionVote) {
        return QuestionVoteResponseDto.builder()
                .vote(questionVote.getVoteCount())
                .voteUpUsers(questionVote.getUpUserId())
                .voteDownUsers(questionVote.getDownUserId())
                .build();
    }
}
