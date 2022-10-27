package pre_002.stackOverFlow_Clone.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pre_002.stackOverFlow_Clone.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findByQuestionId(Long questionId);
}
