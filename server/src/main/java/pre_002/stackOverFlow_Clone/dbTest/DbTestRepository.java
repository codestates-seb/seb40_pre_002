package pre_002.stackOverFlow_Clone.dbTest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DbTestRepository extends JpaRepository<TestEntity, Long> {
}
