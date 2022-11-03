package pre_002.stackOverFlow_Clone.answer_vote.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.answer.repository.AnswerRepository;
import pre_002.stackOverFlow_Clone.answer_vote.entity.AnswerVote;
import pre_002.stackOverFlow_Clone.answer_vote.repository.AnswerVoteRepository;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerVoteService {
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;
    private final AnswerVoteRepository answerVoteRepository;

    // 조건에 맞는 vote가 있는지 확인
    public String vote(int vote, long userId, long answerId) {
        try{
            AnswerVote answerVote = answerVoteRepository.findByUserUserIdAndAnswerAnswerId(userId, answerId).orElseThrow();
            Answer answer = answerRepository.findById(answerId).get();
            User user = userRepository.findById(userId).get();

            if(answer == null || user == null)
            {
                return "vote error";
            }

            int preVote = answerVote.getVotes();    // 직전 vote 기록

            if(preVote > 0) {
                if(vote > 0) {
                    return "duplicate vote";
//                    throw new BusinessLogicException(ExceptionCode.DUPLICATE_VOTE);
                }
                else if(vote < 0) {
                    answerVote.setVotes(0);
                    answerVoteRepository.flush();
                    answer.setVotes(answer.getVotes()-1);
                    answerRepository.flush();
                    return "invalid pre-votes and current vote = 0";
                }
            }

            else if(preVote < 0) {
                if(vote>0) {
                    answerVote.setVotes(0);
                    answerVoteRepository.flush();
                    answer.setVotes(answer.getVotes()+1);
                    answerRepository.flush();
                    return "invalid pre-votes and current vote = 0";
                }
                else if(vote <0) {
                    return "duplicate vote";
                }
            }

            else if(preVote == 0){
                if(vote>0) {
                    answerVote.setVotes(1);
                    answerVoteRepository.flush();
                    answer.setVotes(answer.getVotes()+1);
                    answerRepository.flush();
                    return "add vote";
                }
                else if(vote <0) {
                    answerVote.setVotes(-1);
                    answerVoteRepository.flush();
                    answer.setVotes(answer.getVotes()-1);
                    answerRepository.flush();
                    return "subtract vote";
                }
            }
        }catch(Exception e){        //pre_vote 가 없는 첫 투표일 경우, 생성 및 투표 적용
            Answer answer = answerRepository.findById(answerId).get();
            AnswerVote answerVote = new AnswerVote();
            answerVote.setAnswer(answer);
            answerVote.setUser(userRepository.findById(userId).get());

            if(vote>0) {
                answerVote.setVotes(1);
                answer.setVotes(answer.getVotes()+1);
                answerRepository.flush();
                answerVoteRepository.save(answerVote);
                return "first vote & add vote";
            }
            else if(vote <0) {
                answerVote.setVotes(-1);
                answer.setVotes(answer.getVotes()-1);
                answerVoteRepository.flush();
                answerVoteRepository.save(answerVote);
                return "first vote & subtract vote";
            }
        }
        return "vote error";
    }

    public List<Long> voteUserIdList(long answerId){
        List<AnswerVote> answerVote = answerVoteRepository.findByAnswerAnswerId(answerId);
        List<Long> response = answerVote.stream().mapToLong(a -> a.getUser().getUserId()).boxed().collect(Collectors.toList());
        return response;
    }

    public int voteStatus(long userId, long answerId){
        AnswerVote answerVote = answerVoteRepository.findByUserUserIdAndAnswerAnswerId(userId, answerId).orElseThrow();
        return answerVote.getVotes();
    }

}
