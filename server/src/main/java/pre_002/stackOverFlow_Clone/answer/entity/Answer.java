package pre_002.stackOverFlow_Clone.answer.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.user.entity.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity(name = "ANSWERS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ANSWERS")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column
    private String contents;

    @CreatedDate
    @Column(updatable = false)
    private Timestamp createdAt;

    @LastModifiedDate
    @Column(insertable = false)
    private Timestamp modifiedAt;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name="QUESTION_ID")
    private Question question;

    public void addUser(User user) {
        this.user = user;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
