package pre_002.stackOverFlow_Clone.question.vote;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
}
