package pre_002.stackOverFlow_Clone.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;

@RestController
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;

    @GetMapping("/{test}")
    public ResponseEntity test(@PathVariable("test") String test) {
        Answer answer = new Answer();
        answer.setContents(test);
        Answer answer1 = answerService.create(answer);

        return new ResponseEntity<>(test, HttpStatus.CREATED);
    }

    @PostMapping("/questionlist/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId) {



        return new ResponseEntity(new Answer(), HttpStatus.CREATED);
    }


}
