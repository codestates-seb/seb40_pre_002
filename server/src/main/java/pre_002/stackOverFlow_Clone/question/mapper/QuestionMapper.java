package pre_002.stackOverFlow_Clone.question.mapper;

import org.mapstruct.Mapper;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postToQuestion(QuestionDto.Post requestBody);
    Question patchToQuestion(QuestionDto.Patch requestBody);

    // 전체 질문 조회
    default List<QuestionDto.QuestionListResponse> questionToQuestionListResponses(List<Question> questionList) {
        return questionList
                .stream()
                .map(question -> QuestionDto.QuestionListResponse.builder()
                        .questionId(question.getQuestionId())
                        .questionTitle(question.getQuestionTitle())
                        .questionContents(question.getQuestionContents())
                        .views(question.getViews())
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .build())
                .collect(Collectors.toList());
    }


//    // 상세 질문 조회
//    default QuestionDto.DetailQuestionResponse questionToResponse(Question question) {
//        QuestionDto.DetailQuestionResponse detailQuestionResponse = new QuestionDto.DetailQuestionResponse();
//        detailQuestionResponse.setQuestionId(question.getQuestionId());
//        detailQuestionResponse.setQuestionTitle(question.getQuestionTitle());
//        detailQuestionResponse.setQuestionContents(question.getQuestionContents());
//        detailQuestionResponse.setViews(question.getViews());
//        detailQuestionResponse.setCreatedAt(question.getCreatedAt());
//        detailQuestionResponse.setModifiedAt(question.getModifiedAt());
//        detailQuestionResponse.setAnswerList();
//    }
//
//    default List<Answer> answerToAnswerList(Answer answer) {
//        return a
//    }
}
