package pre_002.stackOverFlow_Clone.answer.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
@Getter
@Setter
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    private Long userId;

    private Long questionId;

    private Timestamp createdAt;

    private Timestamp modifiedAt;

    private String contents;


}
