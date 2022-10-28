package pre_002.stackOverFlow_Clone.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.mapper.AnswerMapper;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;
import pre_002.stackOverFlow_Clone.dto.MultiResponseDto;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.question.dto.DetailQuestionResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionListResponseDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.mapper.UserMapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question postToQuestion(QuestionDto.Post requestBody) {
        Question question = new Question();
        question.setQuestionTitle(requestBody.getQuestionTitle());
        question.setQuestionContents(requestBody.getQuestionContents());
        return question;
    }
    Question patchToQuestion(QuestionDto.Patch requestBody);

    default DetailQuestionResponseDto questionToResponse(AnswerService answerService, AnswerMapper answerMapper,
                                                         Question question, Integer answerPage, Integer answerSize) {
        DetailQuestionResponseDto detailQuestionResponseDto = new DetailQuestionResponseDto();
        detailQuestionResponseDto.setQuestionId(question.getQuestionId());
        detailQuestionResponseDto.setQuestionTitle(question.getQuestionTitle());
        detailQuestionResponseDto.setQuestionContents(question.getQuestionContents());
        detailQuestionResponseDto.setCreatedAt(question.getCreatedAt());
        detailQuestionResponseDto.setModifiedAt(question.getModifiedAt());
        detailQuestionResponseDto.setView(question.getViews());

        try {
            Page<Answer> answers = answerService.readAnswers(question, answerPage, answerSize);
            List<Answer> answerList = answers.getContent();
            detailQuestionResponseDto.setAnswers(new MultiResponseDto<>(
                    answerMapper.answersToResponses(answerList), answers));
        } catch (BusinessLogicException e){}

        return detailQuestionResponseDto;
    }

    default List<QuestionListResponseDto> questionsToResponses(List<Question> questionList) {
        return questionList.stream()
                .map(question -> QuestionListResponseDto
                        .builder()
                        .questionId(question.getQuestionId())
                        .questionTitle(question.getQuestionTitle())
                        .questionContents(question.getQuestionContents())
                        .views(question.getViews())
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .answeredAt(question.getAnsweredAt())
                        .build())
                .collect(Collectors.toList());
    }
}
