package pre_002.stackOverFlow_Clone.answer.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.repository.QuestionRepository;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    default Answer postToAnswer(AnswerDto.Post post, Question question) {

        Answer answer = new Answer();
        answer.setContents(post.getAnswerContents());
        answer.setQuestion(question);

        return answer;
    }
    Answer patchToAnswer(AnswerDto.Patch patch);
    AnswerDto.Response answerToResponse(Answer answer);
    List<AnswerDto.Response> answersToResponses(List<Answer> answers);
}
