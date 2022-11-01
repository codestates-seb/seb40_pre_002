package pre_002.stackOverFlow_Clone.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.repository.AnswerRepository;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.exception.ExceptionCode;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.service.QuestionService;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.repository.UserRepository;
import pre_002.stackOverFlow_Clone.user.service.UserService;

import java.security.Principal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final UserService userService;


    /*
     * 답변 등록
     * */
    public Answer createAnswer(Answer answer, Long questionId, Principal principal) {

        User user = userService.findVerifiedUserByEmail(principal.getName());
        Question question = questionService.getQuestion(questionId);
        List<Answer> answerList = question.getAnswers();

        answerList.add(answer);
        question.setCountAnswer(question.getCountAnswer() + 1);
        question.setUser(user);
        question.setAnswers(answerList);
        answer.setUser(user);

        questionService.postQuestion(question, principal);
        Answer saved = answerRepository.save(answer);
        question.setCreatedAnsweredAt(saved.getCreatedAt());
        return saved;
    }


    /*
     * 답변 조회
     * */
    public Page<Answer> readAnswers(Question question, int page, int size) {

        Page<Answer> answers = answerRepository.findAnswersByQuestion(
                PageRequest.of(page, size, Sort.by("answerId").descending()), question);

        return answers;
    }


    /*
     * 답변 수정
     * */
    public Answer updateAnswer(Answer answer, Long questionId, Principal principal) {

        User user = userService.findVerifiedUserByEmail(principal.getName());
        Question question = questionService.getQuestion(questionId);
        Answer findAnswer = answerRepository.findById(answer.getAnswerId()).get();

        question.setUser(user);
        findAnswer.setAnswerContents(answer.getAnswerContents());
        findAnswer.setModifiedAt(new Timestamp(System.currentTimeMillis()));
        question.setModifiedAnsweredAt(new Timestamp(System.currentTimeMillis()));

        answerRepository.save(findAnswer);
        return findAnswer;
    }


    /*
     * 답변 삭제
     * */
    public void deleteAnswer(Long answerId, Long questionId, Principal principal) {

        User user = userService.findVerifiedUserByEmail(principal.getName());
        Question question = questionService.getQuestion(questionId);
        Answer findAnswer = answerRepository.findById(answerId).get();

        question.setUser(user);
        List<Answer> answers = question.getAnswers();
        System.out.println(answers);
        answers.remove(findAnswer);
        System.out.println(answers);
        question.setAnswers(answers);

        answerRepository.delete(findAnswer);
    }

}
