package pre_002.stackOverFlow_Clone.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Answer findByAnswerId(Long answerId);
    List<Answer> findAnswersByQuestion(Question question);
}
