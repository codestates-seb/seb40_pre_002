package pre_002.stackOverFlow_Clone.question.vote;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class QuestionVote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long voteId;

    private int voteCount = 0;

    private Long upUserId;

    private Long downUserId;

    @OneToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
