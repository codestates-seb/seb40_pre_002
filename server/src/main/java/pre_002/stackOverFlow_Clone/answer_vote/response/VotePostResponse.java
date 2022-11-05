package pre_002.stackOverFlow_Clone.answer_vote.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class VotePostResponse {
    private final String message;
    private final int votes;
}
