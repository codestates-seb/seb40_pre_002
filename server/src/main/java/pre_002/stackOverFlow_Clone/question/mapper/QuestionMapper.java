package pre_002.stackOverFlow_Clone.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.dto.DetailQuestionResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionListResponseDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;

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

    default DetailQuestionResponseDto questionToResponse(Question entity, Page<Answer> answers) {
        DetailQuestionResponseDto detailQuestionResponseDto = new DetailQuestionResponseDto();
        detailQuestionResponseDto.setQuestionId(entity.getQuestionId());
        detailQuestionResponseDto.setQuestionTitle(entity.getQuestionTitle());
        detailQuestionResponseDto.setQuestionContents(entity.getQuestionContents());
        detailQuestionResponseDto.setCreatedAt(entity.getCreatedAt());
        detailQuestionResponseDto.setModifiedAt(entity.getModifiedAt());
        detailQuestionResponseDto.setAnswers(answers);

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
