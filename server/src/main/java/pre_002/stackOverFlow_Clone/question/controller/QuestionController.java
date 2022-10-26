package pre_002.stackOverFlow_Clone.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.dto.MultiResponseDto;
import pre_002.stackOverFlow_Clone.dto.SingleResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.mapper.QuestionMapper;
import pre_002.stackOverFlow_Clone.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/questionlist")
@RestController
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @GetMapping
    public ResponseEntity getQuestionList(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {
        Page<Question> questionPage = questionService.getQuestionList(page - 1, size);
        List<Question> response = questionPage.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionToQuestionListResponses(response), questionPage), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post
//                                       ,@AuthenticationPrincipal Users user
                                       ) {
//        post.setUserId(user.getUserId);

        Question question = questionService.postQuestion(mapper.postToQuestion(post));
        return new ResponseEntity<>(
                new SingleResponseDto<>(question), HttpStatus.CREATED);
    }
}
