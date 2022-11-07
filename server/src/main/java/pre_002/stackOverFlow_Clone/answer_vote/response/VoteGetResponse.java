package pre_002.stackOverFlow_Clone.answer_vote.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class VoteGetResponse {
    private final int voteStatus;
    private final int votes;
}
