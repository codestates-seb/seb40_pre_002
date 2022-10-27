package pre_002.stackOverFlow_Clone.question.mapper;

import org.mapstruct.Mapper;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.dto.MultiResponseDto;
import pre_002.stackOverFlow_Clone.dto.SingleResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postToQuestion(QuestionDto.Post requestBody);
    Question patchToQuestion(QuestionDto.Patch requestBody);

    Question questionToResponse(Question question);
    List<QuestionDto.Response> questionsToResponses(List<Question> questionList);
}
