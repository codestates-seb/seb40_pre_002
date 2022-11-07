package pre_002.stackOverFlow_Clone.question.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-02T00:09:31+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question postToQuestion(QuestionDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionTitle( requestBody.getQuestionTitle() );
        question.setQuestionContents( requestBody.getQuestionContents() );

        return question;
    }

    @Override
    public Question patchToQuestion(QuestionDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( requestBody.getQuestionId() );
        question.setQuestionTitle( requestBody.getQuestionTitle() );
        question.setQuestionContents( requestBody.getQuestionContents() );

        return question;
    }
}
