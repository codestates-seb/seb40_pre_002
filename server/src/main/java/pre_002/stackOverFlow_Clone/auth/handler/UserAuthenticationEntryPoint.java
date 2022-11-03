package pre_002.stackOverFlow_Clone.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import pre_002.stackOverFlow_Clone.auth.utils.ErrorResponder;
import pre_002.stackOverFlow_Clone.exception.ExceptionCode;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class UserAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException{
//        Exception exception = (Exception) request.getAttribute("exception");
//        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
//
//        logExceptionMessage(authException, exception);
        ExceptionCode exception = (ExceptionCode) request.getAttribute("exception");

        // 토큰 없는 경우
        if(exception == null) {
            ErrorResponder.sendErrorResponse(response, ExceptionCode.NOT_LOGIN);
            return;
        }

        // 토큰 만료된 경우
        if(exception.equals(ExceptionCode.EXPIRED_TOKEN)) {
            ErrorResponder.sendErrorResponse(response, ExceptionCode.EXPIRED_TOKEN);
            return;
        }

        // 토큰 시그니처가 다른 경우
        if(exception.equals(ExceptionCode.INVALID_TOKEN)) {
            ErrorResponder.sendErrorResponse(response, ExceptionCode.INVALID_TOKEN);
        }

        // 토큰 손상이 있는 경우
        if(exception.equals(ExceptionCode.UNAUTHORIZED)) {
            ErrorResponder.sendErrorResponse(response, ExceptionCode.UNAUTHORIZED);
        }
    }

    private void logExceptionMessage(AuthenticationException authException, Exception exception) {
        String message = exception != null ? exception.getMessage() : authException.getMessage();
        log.warn("Unauthorized error happened: {}", message);
    }
}
