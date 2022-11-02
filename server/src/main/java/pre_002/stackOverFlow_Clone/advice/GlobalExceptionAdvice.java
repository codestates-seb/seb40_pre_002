package pre_002.stackOverFlow_Clone.advice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import pre_002.stackOverFlow_Clone.exception.BusinessLogicException;
import pre_002.stackOverFlow_Clone.dto.ErrorResponse;


@Slf4j
@RestControllerAdvice
public class GlobalExceptionAdvice {
//    @ExceptionHandler
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    public ErrorResponse handleMethodArgumentNotValidException(
//            MethodArgumentNotValidException e) {
//        final ErrorResponse response = ErrorResponse.of(e.getBindingResult());
//
//        return response;
//    }

    @ExceptionHandler
    public ResponseEntity handleBusinessLogicException(BusinessLogicException e) {
        return new ResponseEntity<>(ErrorResponse.of(e.getExceptionCode()), HttpStatus.valueOf(e.getExceptionCode()
                .getStatusCode()));
    }
}
