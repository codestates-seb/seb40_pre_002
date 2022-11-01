package pre_002.stackOverFlow_Clone.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class DeleteAnswerResponseDto<T> {
    private final T message;
}