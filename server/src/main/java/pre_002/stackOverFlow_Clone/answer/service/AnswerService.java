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
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final UserRepository userRepository;


    /*
     * 답변 등록
     * */
    public Answer createAnswer(Answer answer, Long questionId) {

//        findVerifiedUser(answer.getUser().getUserId());

        Question question = questionService.getQuestion(questionId);
        question.setCountAnswer(question.getCountAnswer() + 1);

        List<Answer> answers = question.getAnswers();
        answers.add(answer);
        question.setAnswers(answers);

        System.out.println(answer.getContents());
        Answer saved = answerRepository.save(answer);
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
    public Answer updateAnswer(Answer answer) {

        Answer findAnswer = answerRepository.findById(answer.getAnswerId()).get();
        findAnswer.setContents(answer.getContents());
        findAnswer.setModifiedAt(new Timestamp(System.currentTimeMillis()));
        return findAnswer;
    }


    /*
     * 답변 삭제
     * */
    public void deleteAnswer(Long answerId) {
        Answer byAnswerId = answerRepository.findByAnswerId(answerId);
        answerRepository.delete(byAnswerId);
    }

    private void findVerifiedUser(Long userId) {

        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_NOT_USER);
    }
}
