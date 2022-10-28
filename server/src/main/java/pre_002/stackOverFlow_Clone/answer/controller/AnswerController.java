package pre_002.stackOverFlow_Clone.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;



    @PostMapping("/questionlist/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId) {



        return new ResponseEntity(new Answer(), HttpStatus.CREATED);
    }


}