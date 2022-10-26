package pre_002.stackOverFlow_Clone.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
