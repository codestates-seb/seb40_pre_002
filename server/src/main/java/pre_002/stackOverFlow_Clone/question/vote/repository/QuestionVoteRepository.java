package pre_002.stackOverFlow_Clone.question.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pre_002.stackOverFlow_Clone.question.vote.entity.QuestionVote;

@Repository
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
}
