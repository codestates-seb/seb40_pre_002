package pre_002.stackOverFlow_Clone.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class LoginResponseDto {
    private String message;

    public LoginResponseDto(String message) {
        this.message = message;
    }
}
