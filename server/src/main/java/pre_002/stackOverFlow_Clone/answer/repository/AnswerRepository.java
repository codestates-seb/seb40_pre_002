package pre_002.stackOverFlow_Clone.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Page<Answer> findAnswersByQuestion(PageRequest of, Question question);
}
