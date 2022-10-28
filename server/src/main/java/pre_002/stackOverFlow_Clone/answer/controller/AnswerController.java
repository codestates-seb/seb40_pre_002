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

import javax.validation.Valid;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;

    private final AnswerMapper answerMapper;



    @PostMapping("/questionlist/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId,
                                     @Valid @RequestBody AnswerDto.Post post) {

        Answer answer = answerService.createAnswer(answerMapper.postToAnswer(post), questionId);
        AnswerDto.Response response = answerMapper.answerToResponse(answer);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }


}
