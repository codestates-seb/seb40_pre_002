package pre_002.stackOverFlow_Clone.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.mapper.AnswerMapper;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;
    private final QuestionService questionService;
    private final AnswerMapper answerMapper;


    /*
     * 답변 등록
     * */
    @PostMapping("/questionlist/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId,
                                     @Valid @RequestBody AnswerDto.Post post) {

        Answer answer = answerService.createAnswer(answerMapper.postToAnswer(post), questionId);
        AnswerDto.Response response = answerMapper.answerToResponse(answer);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    /*
     * 답변 수정
     * */
    @PatchMapping("questionlist/{question-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("question-id") Long questionId,
                                      @Valid @RequestBody AnswerDto.Patch patch) {

        Answer answer = answerService.updateAnswer(answerMapper.patchToAnswer(patch));
        AnswerDto.Response response = answerMapper.answerToResponse(answer);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    /*
     * 답변 삭제
     * */
    @DeleteMapping("/quesiontlist/{question-id}")
    public void deleteAnswer(@PathVariable("question-id") @Positive Long questionId) {
//        Question findQuestion = questionService.getQuestion(questionId);
////        List<Answer> answers = findQuestion.getAnswers();
//        answerService.deleteAnswer(answers);
    }
}
