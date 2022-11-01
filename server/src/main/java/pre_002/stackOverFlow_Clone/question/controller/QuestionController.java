package pre_002.stackOverFlow_Clone.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.answer.mapper.AnswerMapper;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;
import pre_002.stackOverFlow_Clone.dto.MultiResponseDto;
import pre_002.stackOverFlow_Clone.dto.PageInfo;
import pre_002.stackOverFlow_Clone.dto.SingleResponseDto;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.exception.ExceptionCode;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionListResponseDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.mapper.QuestionMapper;
import pre_002.stackOverFlow_Clone.question.service.QuestionService;
import pre_002.stackOverFlow_Clone.user.mapper.UserMapper;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor // DI 생성자
@RequestMapping("/") // request 를 특정 메서드와 매핑
@RestController //Json 형태로 객체 데이터를 반환. @Controller 는 view 를 반환
@Validated // AOP 기반 유효성 검증 진행
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final UserMapper userMapper;

    /**
    * 전체 질문 조회
    */
    @GetMapping("/questionlist")
    public ResponseEntity getQuestionList(@RequestParam(name = "page", required = false, defaultValue = "1") int page,
                                          @RequestParam(name = "size", required = false, defaultValue = "15") int size) {

        Page<Question> questionPage = questionService.getQuestionList(page, size);
        PageInfo pageInfo = PageInfo.of(questionPage);

        List<QuestionListResponseDto> list = questionMapper.questionsToResponses(questionPage.getContent());

        return new ResponseEntity<>(new MultiResponseDto<>(list, pageInfo), HttpStatus.OK);
    }

    /**
    * 상세 질문 조회
    */
    @GetMapping("/questionlist/{question-id}")
    public ResponseEntity getDetailQuestion(@PathVariable("question-id") @Positive Long questionId,
                                            @RequestParam(name = "page", required = false, defaultValue = "1") int page,
                                            @RequestParam(name = "size", required = false, defaultValue = "30") int size) {

        Question question = questionService.getQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        questionMapper.questionToResponse(
                                answerService, answerMapper, question, page - 1, size, userMapper)), HttpStatus.OK);
    }

    /**
    * 질문 등록
    */
    @PostMapping("/auth/questionlist")
    public Long postQuestion(@Valid @RequestBody QuestionDto.Post post, Principal principal) {

        Question question = questionService.postQuestion(questionMapper.postToQuestion(post), principal);

        return question.getQuestionId();
    }

    /**
    * 질문 수정
    */
    @PatchMapping("/auth/questionlist/{question-id}")
    public Long patchQuestion(@PathVariable("question-id") @Positive Long questionId,
                              @Valid @RequestBody QuestionDto.Patch patch,
                              Principal principal) {

        patch.setQuestionId(questionId);

        Question question =
                questionService.patchQuestion(
                        questionMapper.patchToQuestion(patch), principal);

        return question.getQuestionId();
    }

    /**
    * 질문 삭제
    */
    @DeleteMapping("/auth/questionlist/{question-id}")
    public void deleteQuestion(@PathVariable("question-id") @Positive Long questionId,
                               Principal principal) {

        questionService.delete(questionId, principal);
    }
}
