package pre_002.stackOverFlow_Clone.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findByQuestionId(Long questionId);

    // 레포에서 키워드를 포함하는 제목을 가진 질문을 질문 Id 내림순으로 찾음
    List<Question> findByQuestionTitleContainingOrderByQuestionIdDesc(String keyword);

    // 검색 기능(페이징 추가) -> 이 방법 가능
//    List<Question> findByQuestionTitleContaining(String keyword, Pageable pageable);
}
