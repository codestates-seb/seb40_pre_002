package pre_002.stackOverFlow_Clone.answer_vote.mapper;

import org.mapstruct.Mapper;
import pre_002.stackOverFlow_Clone.answer_vote.dto.AnswerVoteDto;
import pre_002.stackOverFlow_Clone.answer_vote.entity.AnswerVote;


@Mapper(componentModel = "spring")
public interface AnswerVoteMapper {
    AnswerVote answerVotePostDtoToAnswerVote(AnswerVoteDto answerVoteDto);
}
