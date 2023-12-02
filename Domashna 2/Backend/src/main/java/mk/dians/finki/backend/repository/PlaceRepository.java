package mk.dians.finki.backend.repository;


import mk.dians.finki.backend.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {

    Place findByName(String name);


}
