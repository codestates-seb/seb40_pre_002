package pre_002.stackOverFlow_Clone.answer_vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pre_002.stackOverFlow_Clone.answer_vote.entity.AnswerVote;

import java.util.List;
import java.util.Optional;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Integer> {
    Optional<AnswerVote> findByUserUserIdAndAnswerAnswerId(Long userId, Long answerId);
    List<AnswerVote> findByAnswerAnswerId(Long answerId);
}
