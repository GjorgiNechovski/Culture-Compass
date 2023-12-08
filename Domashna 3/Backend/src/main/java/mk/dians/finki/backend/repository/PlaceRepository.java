package mk.dians.finki.backend.repository;


import mk.dians.finki.backend.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
    List<Place> findByNameContainingIgnoreCase(String name);
    List<Place> findByType(String type);
    List<Place> findByNameContainingIgnoreCaseAndTypeEquals(String name, String type);
}

