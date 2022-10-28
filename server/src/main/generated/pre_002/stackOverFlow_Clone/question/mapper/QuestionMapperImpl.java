package pre_002.stackOverFlow_Clone.question.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;
import pre_002.stackOverFlow_Clone.question.dto.DetailQuestionResponseDto;
import pre_002.stackOverFlow_Clone.question.dto.QuestionDto;
import pre_002.stackOverFlow_Clone.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-28T05:06:01+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

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

    @Override
    public DetailQuestionResponseDto questionToResponse(Question entity) {
        if ( entity == null ) {
            return null;
        }

        DetailQuestionResponseDto detailQuestionResponseDto = new DetailQuestionResponseDto();

        detailQuestionResponseDto.setAnswers( answerListToAnswerDtoList( entity.getAnswers() ) );
        detailQuestionResponseDto.setQuestionId( entity.getQuestionId() );
        detailQuestionResponseDto.setQuestionTitle( entity.getQuestionTitle() );
        detailQuestionResponseDto.setQuestionContents( entity.getQuestionContents() );
        detailQuestionResponseDto.setCreatedAt( entity.getCreatedAt() );
        detailQuestionResponseDto.setModifiedAt( entity.getModifiedAt() );
        detailQuestionResponseDto.setAnsweredAt( entity.getAnsweredAt() );

        return detailQuestionResponseDto;
    }

    protected AnswerDto answerToAnswerDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDto answerDto = new AnswerDto();

        answerDto.setAnswerId( answer.getAnswerId() );
        answerDto.setCreatedAt( answer.getCreatedAt() );
        answerDto.setModifiedAt( answer.getModifiedAt() );

        return answerDto;
    }

    protected List<AnswerDto> answerListToAnswerDtoList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<AnswerDto> list1 = new ArrayList<AnswerDto>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToAnswerDto( answer ) );
        }

        return list1;
    }
}
