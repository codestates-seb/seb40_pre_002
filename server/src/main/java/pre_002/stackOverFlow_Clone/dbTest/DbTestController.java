package pre_002.stackOverFlow_Clone.dbTest;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DbTestController {

    private final DbTestService dbTestService;

    @GetMapping("/")
    public String test() {
        return "hello mysql";
    }

    @PostMapping("/{name}")
    public String post(@PathVariable("name") String name) {
        TestEntity request = new TestEntity();
        request.setName(name);
        TestEntity response = dbTestService.create(request);
        return response.getName();
    }
}
