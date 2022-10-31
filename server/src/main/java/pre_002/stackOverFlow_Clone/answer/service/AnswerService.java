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

import java.sql.Timestamp;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final UserRepository userRepository;

    public Answer createAnswer(Answer answer, Long questionId) {

//        findVerifiedUser(answer.getUser().getUserId());

        Question question = questionService.getQuestion(questionId);

        question.setCountAnswer(question.getCountAnswer() + 1);
        question.setCreatedAnsweredAt(answer.getCreatedAt());

        System.out.println(answer.getContents());
        Answer saved = answerRepository.save(answer);
        return saved;
    }

    public Page<Answer> readAnswers(Question question, int page, int size) {

        Page<Answer> answers = answerRepository.findAnswersByQuestion(
                PageRequest.of(page, size, Sort.by("answerId").descending()), question);



        return answers;
    }

    public Answer updateAnswer(Answer answer) {

        Question question = answer.getQuestion();

        Answer findAnswer = answerRepository.findById(answer.getAnswerId()).get();
        findAnswer.setContents(answer.getContents());
        findAnswer.setModifiedAt(new Timestamp(System.currentTimeMillis()));

        question.setModifiedAnsweredAt(answer.getModifiedAt());

        return findAnswer;
    }

    public void deleteAnswer(Answer answer) {
        answerRepository.delete(answer);
    }

    private void findVerifiedUser(Long userId) {

        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_NOT_USER);
    }
}
