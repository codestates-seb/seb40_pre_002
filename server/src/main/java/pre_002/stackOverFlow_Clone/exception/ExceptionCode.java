package pre_002.stackOverFlow_Clone.exception;

import lombok.Getter;


public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),

    USER_EXISTS(409, "User(Email) exists"),

    UNAUTHORIZED_NOT_USER(401, "You must be logged."),

    FORBIDDEN_USER(403,  "You're not a writer."),

    QUESTION_NOT_FOUND(404,  "Question is not found."),

    ANSWER_NOT_FOUND(404, "Answer is not found."),
    VOTE_EXIST(409, "You already vote."),
    EXPIRED_TOKEN(401, "Token is expired"),

    INVALID_TOKEN(401, "Token is expired"),

    UNAUTHORIZED(401, "Unauthorized"),

    EMPTY_TOKEN(401, "Access Token is empty"),

    DUPLICATE_VOTE(406, "Duplicate vote");

    @Getter
    private final int statusCode;

    @Getter
    private final String message;

    ExceptionCode(int statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
