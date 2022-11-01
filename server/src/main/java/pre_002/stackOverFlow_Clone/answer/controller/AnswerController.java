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
import pre_002.stackOverFlow_Clone.dto.DeleteAnswerResponseDto;
import pre_002.stackOverFlow_Clone.dto.SingleResponseDto;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.exception.ExceptionCode;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.service.QuestionService;
import pre_002.stackOverFlow_Clone.question.repository.QuestionRepository;


import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final QuestionRepository questionRepository;


    /*
     * 답변 등록
     * */
    @PostMapping("/auth/questionlist/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId,
                                     @Valid @RequestBody AnswerDto.Post post,
                                     Principal principal) {

        Question question = questionRepository.findByQuestionId(questionId);

        Answer answer = answerService.createAnswer(answerMapper.postToAnswer(post, question), questionId, principal);

        AnswerDto.Response response = answerMapper.answerToResponse(answer);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    /*
     * 답변 수정
     * */
    @PatchMapping("/auth/questionlist/{question-id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("question-id") Long questionId,
                                      @Valid @RequestBody AnswerDto.Patch patch,
                                      Principal principal) {

        Answer getAnswer = answerService.readAnswer(answerMapper.patchToAnswer(patch).getAnswerId());
        if(!Objects.equals(principal.getName(), getAnswer.getUser().getEmail())){
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN_USER);
        }

        Answer answer = answerService.updateAnswer(answerMapper.patchToAnswer(patch), questionId, principal);
        AnswerDto.Response response = answerMapper.answerToResponse(answer);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    /*
     * 답변 삭제
     * */
    @DeleteMapping("/auth/questionlist/{question-id}/del/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("question-id") @Positive Long questionId,
                                       @PathVariable("answer-id") @Positive Long answerId,
                                       Principal principal) {
        Answer answer = answerService.readAnswer(answerId);
        if(!Objects.equals(principal.getName(), answer.getUser().getEmail())){
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN_USER);
        }
        answerService.deleteAnswer(answerId, questionId, principal);
        return new ResponseEntity(new DeleteAnswerResponseDto<>("답변 삭제 완료"), HttpStatus.OK);
    }

}
