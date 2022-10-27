package pre_002.stackOverFlow_Clone.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.repository.AnswerRepository;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;
import pre_002.stackOverFlow_Clone.dto.MultiResponseDto;
import pre_002.stackOverFlow_Clone.dto.PageInfo;
import pre_002.stackOverFlow_Clone.dto.SingleResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.DetailQuestionResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionListResponseDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.mapper.QuestionMapper;
import pre_002.stackOverFlow_Clone.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.sql.Timestamp;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/questionlist")
@RestController
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final AnswerService answerService;
    private final AnswerRepository answerRepository;

    // 전체 질문 조회
    @GetMapping
    public ResponseEntity getQuestionList(@RequestParam(name = "page", required = false, defaultValue = "1") int page,
                                          @RequestParam(name = "size", required = false, defaultValue = "15")int size) {

        Page<Question> questionPage = questionService.getQuestionList(page, size);
        PageInfo pageInfo = PageInfo.of(questionPage);

        List<QuestionListResponseDto> list = questionMapper.questionsToResponses(questionPage.getContent());

        return new ResponseEntity<>(new MultiResponseDto<>(list, pageInfo), HttpStatus.OK);
    }

    // 상세 질문 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getDetailQuestion(@PathVariable("question_id") @Positive Long questionId,
                                            @RequestParam(name = "page", required = false, defaultValue = "1") int page,
                                            @RequestParam(name = "size", required = false, defaultValue = "30") int size) {

        Question question = questionService.getQuestion(questionId);
        Pageable pageable = PageRequest.of(page, size, Sort.by("").descending());

        Page<Answer> answers = answerService.readAnswers(question, pageable);

        DetailQuestionResponseDto responseDto = questionMapper.questionToResponse(question, answers);

        return new ResponseEntity<>(new SingleResponseDto<>(responseDto), HttpStatus.OK);
    }

    // 질문 등록
    @PostMapping
    public Long postQuestion(@Valid @RequestBody QuestionDto.Post post) {

        Question question = questionService.postQuestion(questionMapper.postToQuestion(post));
//        System.out.println(question.getQuestionContents());
//        DetailQuestionResponseDto response = questionMapper.questionToResponse(question);

//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
        return question.getQuestionId();
    }
}
