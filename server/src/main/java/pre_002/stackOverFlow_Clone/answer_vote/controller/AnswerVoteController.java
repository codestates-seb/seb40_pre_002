package pre_002.stackOverFlow_Clone.answer_vote.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.answer.service.AnswerService;
import pre_002.stackOverFlow_Clone.answer_vote.dto.AnswerVoteDto;
import pre_002.stackOverFlow_Clone.answer_vote.response.VoteGetResponse;
import pre_002.stackOverFlow_Clone.answer_vote.service.AnswerVoteService;
import pre_002.stackOverFlow_Clone.answer_vote.response.VotePostResponse;
import pre_002.stackOverFlow_Clone.user.service.UserService;

import javax.validation.constraints.Positive;
import java.security.Principal;

@RequiredArgsConstructor
@RestController
@Validated
@Slf4j
public class AnswerVoteController {

    private final AnswerVoteService answerVoteService;
    private final UserService userService;
    private final AnswerService answerService;

    @PostMapping("/auth/questionlist/{answer-id}/vote")
    public ResponseEntity postVote(@PathVariable("answer-id") @Positive Long answerId,
                                   @RequestBody AnswerVoteDto answerVoteDto, Principal principal){
        Long userId = userService.findVerifiedUserByEmail(principal.getName()).getUserId();
        String response = answerVoteService.vote(answerVoteDto.getVote(), userId, answerId);
        int votes = answerService.findVerifiedAnswer(answerId).getVotes();

        HttpStatus httpStatus;
        if(response.equals("duplicate vote")) httpStatus = HttpStatus.NOT_ACCEPTABLE;
        else httpStatus = HttpStatus.OK;
        return new ResponseEntity<>(new VotePostResponse(response, votes), httpStatus);
    }

    @GetMapping("/auth/questionlist/{answer-id}/vote")
    public ResponseEntity getVote(@PathVariable("answer-id") @Positive Long answerId, Principal principal){
        Long userId = userService.findVerifiedUserByEmail(principal.getName()).getUserId();
        int votes = answerService.findVerifiedAnswer(answerId).getVotes();
//        List<Long> voteUserIdList = answerVoteService.voteUserIdList(answerId);
        int voteStatus = answerVoteService.voteStatus(userId, answerId);
        return new ResponseEntity<>(new VoteGetResponse(voteStatus, votes), HttpStatus.OK);
    }
}
