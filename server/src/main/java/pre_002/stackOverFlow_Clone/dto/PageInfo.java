package pre_002.stackOverFlow_Clone.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class PageInfo {
    private int page;
    private int size;
    private Long totalElements;
    private int totalPages;

    public static PageInfo of(Page page) {

//        this.page = page.getNumber();
//        this.size = page.getSize();
//        this.totalElements = page.getTotalElements();
//        this.totalPages = page.getTotalPages();
//
//        if (totalElements == null) {
//            this.totalElements = 0L;
//            this.totalPages = 0;
//        }
//
//        return PageInfo.builder().build();

        return PageInfo.builder()
                .page(page.getNumber() + 1)
                .size(page.getSize())
                .totalElements(page.getTotalElements())
                .totalPages(page.getTotalPages())
                .build();
    }
}
