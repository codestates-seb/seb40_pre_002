package pre_002.stackOverFlow_Clone.dbTest;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class TestEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
}
