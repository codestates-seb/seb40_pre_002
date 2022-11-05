package pre_002.stackOverFlow_Clone.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.entity.Question;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Email
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String userName;

    @Column(length = 100, nullable = false)
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

//    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
//    private List<QuestionVotes> questionVotes = new ArrayList<>();
//
//    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
//    private List<AnswerVotes> answerVotes = new ArrayList<>();

    public enum UserRole {
        ROLE_USER,
        ROLE_ADMIN
    }

}
