package pre_002.stackOverFlow_Clone.answer.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Page<AnswerDto> answerToAnswerDto(Page<Answer> answers);
}
