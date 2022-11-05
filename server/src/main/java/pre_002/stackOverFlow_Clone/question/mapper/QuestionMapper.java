package pre_002.stackOverFlow_Clone.question.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.mapper.AnswerMapper;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;
import pre_002.stackOverFlow_Clone.dto.PageInfo;
import pre_002.stackOverFlow_Clone.question.dto.QuestionAnswerPageInfoResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.DetailQuestionResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionListResponseDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.user.mapper.UserMapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question postToQuestion(QuestionDto.Post requestBody);
    Question patchToQuestion(QuestionDto.Patch requestBody);

    default DetailQuestionResponseDto questionToResponse(Question question, UserMapper userMapper) {

        return DetailQuestionResponseDto.builder()
                .questionId(question.getQuestionId())
                .questionTitle(question.getQuestionTitle())
                .questionContents(question.getQuestionContents())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .view(question.getViews())
                .vote(question.getVote().getVoteCount())
                .user(userMapper.userToUserResponseDto(question.getUser()))
                .build();
    }

    default QuestionAnswerPageInfoResponseDto DetailToQuestionAnswerPageInfo(DetailQuestionResponseDto detailQuestionResponseDto,
                                                                             AnswerService answerService, AnswerMapper answerMapper,
                                                                             Integer answerPage, Integer answerSize,
                                                                             Question question) {

        Page<Answer> answers = answerService.readAnswers(question, answerPage, answerSize);
        List<Answer> answerList = answers.getContent();

        System.out.println(answers.getTotalPages());

        return QuestionAnswerPageInfoResponseDto.builder()
                .data(detailQuestionResponseDto)
                .answers(answerMapper.answersToResponses(answerList))
                .pageInfo(new PageInfo(answers.getNumber() + 1, answers.getSize(), answers.getTotalElements(), answers.getTotalPages()))
                .build();
    }

    default List<QuestionListResponseDto> questionsToResponses(List<Question> questionList) {

        return questionList.stream()
                .map(question -> QuestionListResponseDto
                        .builder()
                        .questionId(question.getQuestionId())
                        .questionTitle(question.getQuestionTitle())
                        .questionContents(question.getQuestionContents())
                        .views(question.getViews())
                        .vote(question.getVote().getVoteCount())
                        .countAnswer(question.getCountAnswer())
                        .createdAt(question.getCreatedAt())
                        .modifiedAt(question.getModifiedAt())
                        .createdAnsweredAt(question.getCreatedAnsweredAt())
                        .modifiedAnsweredAt(question.getModifiedAnsweredAt())
                        .username(question.getUser().getUserName())
                        .build())
                .collect(Collectors.toList());
    }
}
