package pre_002.stackOverFlow_Clone.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.vote.entity.QuestionVote;
import pre_002.stackOverFlow_Clone.user.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "QUESTIONS")
@Getter
@Setter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column
    private String questionTitle;

    @Column(columnDefinition = "LONGTEXT")
    private String questionContents;

    @Column
    private int views;

    @OneToOne(mappedBy = "question", cascade = CascadeType.ALL)
    private QuestionVote vote;

    @Column
    private int countAnswer;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @Column(insertable = false)
    private LocalDateTime modifiedAt;

    @Column
    private Timestamp createdAnsweredAt;

    @Column
    private Timestamp modifiedAnsweredAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();
}
