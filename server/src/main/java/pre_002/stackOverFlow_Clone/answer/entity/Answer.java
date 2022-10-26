package pre_002.stackOverFlow_Clone.answer.entity;


import lombok.Getter;
import lombok.Setter;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Getter
@Setter
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="question_id")
    private Question question;

    private Timestamp createdAt;

    private Timestamp modifiedAt;

    private String contents;


}
