package mk.dians.finki.backend.service;

import mk.dians.finki.backend.model.Place;

import java.util.List;
import java.util.Optional;


public interface PlaceService {

    List<Place> getPlaces(String type, String search);

    Optional<Place> getPlaceById(Long id);

}
