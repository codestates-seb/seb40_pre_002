package pre_002.stackOverFlow_Clone.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.repository.AnswerRepository;

import java.sql.Timestamp;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {

    private final AnswerRepository answerRepository;

    public Answer create(Answer answer) {
        Answer saved = answerRepository.save(answer);
        return saved;
    }

    public List<Answer> read() {
        List<Answer> all = answerRepository.findAll();
        return all;
    }

    public Answer update(Answer answer) {
        Answer findAnswer = answerRepository.findById(answer.getAnswerId()).get();
        findAnswer.setContents(answer.getContents());
        findAnswer.setModifiedAt(new Timestamp(System.currentTimeMillis()));
        return findAnswer;
    }

    public void delete(Answer answer) {
        answerRepository.delete(answer);
    }

}
