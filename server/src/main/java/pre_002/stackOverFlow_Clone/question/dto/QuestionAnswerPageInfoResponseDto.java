package pre_002.stackOverFlow_Clone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.domain.Page;
import pre_002.stackOverFlow_Clone.answer.dto.AnswerDto;
import pre_002.stackOverFlow_Clone.dto.PageInfo;

import java.util.List;

@Builder
@Getter
@AllArgsConstructor
public class QuestionAnswerPageInfoResponseDto<T> {
    private T data;
    private List<AnswerDto.Response> answers;
    private PageInfo pageInfo;

    public QuestionAnswerPageInfoResponseDto(T data, Page page, List<AnswerDto.Response> answers) {
        this.data = data;
        this.answers = answers;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }

}
