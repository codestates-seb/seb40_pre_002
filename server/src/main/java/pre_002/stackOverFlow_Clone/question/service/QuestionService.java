package pre_002.stackOverFlow_Clone.question.service;


import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import java.util.List;
import java.util.Optional;

public interface QuestionService {
    Page<Question> getQuestionList(int page, int size);

    Question getQuestion(Long questionId);

    Question postQuestion(Question question);

    Question editQuestion(Question question);

    void delete(Long id);
}
