package mk.dians.finki.backend.service;

import mk.dians.finki.backend.model.Place;

import java.util.List;


public interface PlaceService {

    List<Place> getAllPlaces();


    Place getPlaceByName(String name);


}
