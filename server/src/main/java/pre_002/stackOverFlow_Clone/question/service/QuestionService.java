package pre_002.stackOverFlow_Clone.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.exception.ExceptionCode;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.repository.QuestionRepository;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.service.UserService;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService{

    private final QuestionRepository questionRepository;
    private final UserService userService;

    public Page<Question> getQuestionList(int page, int size) {

        Pageable pageable =
                PageRequest.of(page - 1, size,
                        Sort.by("questionId").descending());

        return questionRepository.findAll(pageable);
    }

    public Question getQuestion(Long questionId) {

        Question question = questionRepository.findByQuestionId(questionId);
        question.setViews(question.getViews() + 1);
        questionRepository.save(question);

        return questionRepository.findByQuestionId(questionId);
    }

    public Question postQuestion(Question question) {

        return questionRepository.save(question);
    }

    public Question patchQuestion(Question question) {
    
        Question getQuestion = questionRepository.findByQuestionId(question.getQuestionId());
        getQuestion.setModifiedAt(LocalDateTime.now());
        getQuestion.setQuestionTitle(question.getQuestionTitle());
        getQuestion.setQuestionContents(question.getQuestionContents());

        return questionRepository.save(getQuestion);
    }

    public void delete(Long questionId) {
    
        Question question = questionRepository.findByQuestionId(questionId);
        questionRepository.delete(question);
    }

}
