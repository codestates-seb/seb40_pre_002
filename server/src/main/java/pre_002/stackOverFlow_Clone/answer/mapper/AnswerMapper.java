package pre_002.stackOverFlow_Clone.answer.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer postToAnswer(AnswerDto.Post post);
    Answer patchToAnswer(AnswerDto.Patch patch);
    AnswerDto.Response answerToResponse(Answer answer);
    List<AnswerDto.Response> answersToResponses(List<Answer> answers);
}
