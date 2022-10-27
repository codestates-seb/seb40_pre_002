package pre_002.stackOverFlow_Clone.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.repository.AnswerRepository;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.service.QuestionService;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.repository.UserRepository;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final UserRepository userRepository;

    public Answer createAnswer(Answer answer) {

        findVerifiedUser(answer.getUser().getUserId());

        Question question = questionService.getQuestion(answer.getQuestion().getQuestionId());
        question.setCountAnswer(question.getCountAnswer() + 1);

        Answer saved = answerRepository.save(answer);
        return saved;
    }

    public Page<Answer> readAnswers(Question question, Pageable p) {
        List<Answer> answerList = answerRepository.findAnswersByQuestion(question);
        Page<Answer> answerPage = new PageImpl<>(answerList.subList(0, answerList.size()), p, answerList.size());

        return answerPage;
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = answerRepository.findById(answer.getAnswerId()).get();
        findAnswer.setContents(answer.getContents());
        findAnswer.setModifiedAt(new Timestamp(System.currentTimeMillis()));
        return findAnswer;
    }

    public void deleteAnswer(Answer answer) {
        answerRepository.delete(answer);
    }

    private User findVerifiedUser(Long userId) {
        return userRepository.findUserById(userId);
    }
}
