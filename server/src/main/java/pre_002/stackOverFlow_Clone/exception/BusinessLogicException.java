package pre_002.stackOverFlow_Clone.exception;

import lombok.Getter;

public class BusinessLogicException extends RuntimeException {
    @Getter
    private final ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}

