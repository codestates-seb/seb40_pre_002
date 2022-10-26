package pre_002.stackOverFlow_Clone.dbTest;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DbTestService {

    private final DbTestRepository dbTestRepository;

    public TestEntity create(TestEntity entity) {
        TestEntity saved = dbTestRepository.save(entity);
        return saved;

    }
}
