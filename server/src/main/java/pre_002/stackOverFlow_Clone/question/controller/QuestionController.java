package pre_002.stackOverFlow_Clone.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
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
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/questionlist")
@RestController
@Validated
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @GetMapping
    public ResponseEntity getQuestionList(@RequestParam(name = "page", required = false, defaultValue = "1") int page,
                                          @RequestParam(name = "size", required = false, defaultValue = "15")int size) {
        Page<Question> questionPage = questionService.getQuestionList(page, size);
        PageInfo pageInfo = PageInfo.of(questionPage);

        List<QuestionListResponseDto> list = mapper.questionsToResponses(questionPage.getContent());

        return new ResponseEntity<>(new MultiResponseDto<>(list, pageInfo), HttpStatus.OK);
    }

    @PostMapping()
    public Long postQuestion(@Valid @RequestBody QuestionDto.Post post) {
        Question question = questionService.postQuestion(mapper.postToQuestion(post));
        System.out.println(question.getQuestionContents());
        DetailQuestionResponseDto response = mapper.questionToResponse(question);

//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
        return response.getQuestionId();
    }
}
