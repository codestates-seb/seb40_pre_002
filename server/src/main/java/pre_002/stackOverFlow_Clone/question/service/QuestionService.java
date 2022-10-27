package pre_002.stackOverFlow_Clone.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.repository.QuestionRepository;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService{

    private final QuestionRepository questionRepository;

    public Page<Question> getQuestionList(int page, int size) {
        Pageable pageable =
                PageRequest.of(page - 1, size,
                        Sort.by("questionId").descending());

        return questionRepository.findAll(pageable);
    }

    public Question getQuestion(Long questionId) {
        return null;
    }

    public Question postQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question editQuestion(Question question) {
        return null;
    }

    public void delete(Long id) {

    }
}
