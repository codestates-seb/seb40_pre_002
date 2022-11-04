package pre_002.stackOverFlow_Clone.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.exception.ExceptionCode;
import pre_002.stackOverFlow_Clone.question.entity.Question;
import pre_002.stackOverFlow_Clone.question.repository.QuestionRepository;
import pre_002.stackOverFlow_Clone.question.vote.entity.QuestionVote;
import pre_002.stackOverFlow_Clone.question.vote.repository.QuestionVoteRepository;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.service.UserService;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService{
    private final QuestionVoteRepository questionVoteRepository;
    private final QuestionRepository questionRepository;
    private final UserService userService;

    public Page<Question> getQuestionList(int page, int size) {

        Pageable pageable =
                PageRequest.of(page - 1, size,
                        Sort.by("questionId").descending());

        return questionRepository.findAll(pageable);
    }

    public Question getQuestion(Long questionId) {

        Question question = findVerifiedQuestion(questionId);
        question.setViews(question.getViews() + 1);
        questionRepository.save(question);

        return questionRepository.findByQuestionId(questionId);
    }

    public Question postQuestion(Question question, Principal principal) {

        User user = userService.findVerifiedUserByEmail(principal.getName());
        question.setUser(user);
        question.setVote(new QuestionVote());

        QuestionVote vote = question.getVote();
        vote.setQuestion(question);
        vote.setVoteCount(0);
        vote.setUpUserId(new ArrayList<>());
        vote.setDownUserId(new ArrayList<>());

        return questionRepository.save(question);
    }

    public Question patchQuestion(Question question, Principal principal) {

        Question getQuestion = findVerifiedQuestion(question.getQuestionId());
        getQuestion.setModifiedAt(LocalDateTime.now());
        getQuestion.setQuestionTitle(question.getQuestionTitle());
        getQuestion.setQuestionContents(question.getQuestionContents());

        verifyUserConfirm(getQuestion, principal);

        return questionRepository.save(getQuestion);
    }

    public void delete(Long questionId, Principal principal) {
    
        Question question = findVerifiedQuestion(questionId);

        verifyUserConfirm(question, principal);

        questionRepository.delete(question);
    }


    public void voteQuestion(Long questionId, Principal principal, int vote) {

        Question question = questionRepository.findByQuestionId(questionId);
        User user = userService.findVerifiedUserByEmail(principal.getName());
        QuestionVote questionVote = question.getVote();

        // 질문 투표 up한 유저일 경우
        if (questionVote.getUpUserId().contains(user.getUserId())) {
            // request vote가 0보다 크면
            if (vote > 0) {
                throw new BusinessLogicException(ExceptionCode.VOTE_EXIST);
            }
            // request vote가 0보다 작으면 투표수 감소
            else {
                questionVote.setVoteCount(questionVote.getVoteCount() - 1);
                questionVote.getUpUserId().remove(user.getUserId());
                questionVoteRepository.save(questionVote);
                question.setVote(questionVote);
                questionRepository.save(question);
            }
        }
        // 질문 투표 down한 유저일 경우
        else if (questionVote.getDownUserId().contains(user.getUserId())){
            // request vote가 0보다 작으면
            if (vote < 0) {
                throw new BusinessLogicException(ExceptionCode.VOTE_EXIST);
            }
            // request vote가 0보다 크면
            else {
                questionVote.setVoteCount(questionVote.getVoteCount() + 1);
                questionVote.getDownUserId().remove(user.getUserId());
                questionVoteRepository.save(questionVote);
                question.setVote(questionVote);
                questionRepository.save(question);
            }
        }
        // 투표하지않은 유저일 경우
        else {
            // request vote가 0보다 크면
            if (vote > 0) {
                questionVote.setVoteCount(questionVote.getVoteCount() + 1);
                questionVote.getUpUserId().add(user.getUserId());
                questionVoteRepository.save(questionVote);
                question.setVote(questionVote);
                questionRepository.save(question);
            }
            // request vote가 0보다 작으면
            else if (vote < 0) {
                questionVote.setVoteCount(questionVote.getVoteCount() - 1);
                questionVote.getDownUserId().add(user.getUserId());
                questionVoteRepository.save(questionVote);
                question.setVote(questionVote);
                questionRepository.save(question);
            }
        }
    }

    public Question findVerifiedQuestion(long questionId) {

        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        return optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    public void verifyUserConfirm(Question question, Principal principal) {

        if (!Objects.equals(principal.getName(), question.getUser().getEmail())) {
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN_USER);
        }
    }

    public Page<Question> searchQuestion(String keyword, int page, int size) {

        // pageable 구현
        Pageable pageable =
                PageRequest.of(page - 1, size,
                        Sort.by("questionId").descending());

        // 저장소에서 list 형태로 가져옴
        List<Question> questionList = questionRepository.findByQuestionTitleContainingOrderByQuestionIdDesc(keyword);

        // List -> Page 형태로 변환
        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), questionList.size());
        Page<Question> questionPage = new PageImpl<>(questionList.subList(start, end), pageable, questionList.size());

        return questionPage;
    }

}
