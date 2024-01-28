package mk.dians.finki.authentication.service.helper;

import mk.dians.finki.authentication.model.Place;
import org.springframework.data.jpa.domain.Specification;

public class PlaceSpecifications {
    public static Specification<Place> withType(String type) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("type"), type);
    }

    public static Specification<Place> withName(String name) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(
                criteriaBuilder.lower(root.get("name")), "%" + name.toLowerCase() + "%");
    }

    public static Specification<Place> withCity(String city) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("city"), city);
    }

    public static Specification<Place> withEntranceFee(boolean fee) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("hasEntranceFee"), fee);
    }
}
