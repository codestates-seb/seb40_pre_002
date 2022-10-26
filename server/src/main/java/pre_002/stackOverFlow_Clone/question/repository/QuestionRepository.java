package pre_002.stackOverFlow_Clone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pre_002.stackOverFlow_Clone.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findByQuestionId(Long questionId);
}
