package pre_002.stackOverFlow_Clone.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class SingleResponseDto<T> {
    private final T data;
}
