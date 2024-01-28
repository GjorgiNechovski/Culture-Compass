package mk.dians.finki.review.service.impl;

import mk.dians.finki.review.model.Place;
import mk.dians.finki.review.repository.PlaceRepository;
import mk.dians.finki.review.service.PlaceService;
import mk.dians.finki.review.service.helper.PlaceSpecifications;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import mk.dians.finki.review.model.exceptions.PlaceNotExistent;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class PlaceServiceImpl implements PlaceService {

    private final PlaceRepository placeRepository;

    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public List<Place> getPlaces(String type, String search, boolean fee, String city) {
        Specification<Place> spec = Specification.where(null);

        if (type != null) {
            spec = spec.and(PlaceSpecifications.withType(type));
        }
        if (search != null) {
            spec = spec.and(PlaceSpecifications.withName(search));
        }
        if (fee) {
            spec = spec.and(PlaceSpecifications.withEntranceFee(true));
        }
        if (city != null) {
            spec = spec.and(PlaceSpecifications.withCity(city));
        }

        return placeRepository.findAll(spec);
    }


    @Override
    public Optional<Place> getPlaceById(Long id) {
        return placeRepository.findById(id);
    }

    @Override
    public List<String> getAllCities() {
        return this.placeRepository.findAllCities();
    }

    @Override
    public void deleteById(Long id) {
        this.placeRepository.deleteById(id);
    }

    public Place savePlace(String name,
                           double xCoordinate, double yCoordinate,
                           String city,
                           String imageUrl,
                           String phoneNumber,
                           String type,
                           boolean hasEntranceFee) throws IOException {
        Place place = new Place();

        if(imageUrl!=null) {
            place.setImageUrl(imageUrl);
        }
        if (phoneNumber != null){
            place.setPhoneNumber(phoneNumber);
        }

        place.setName(name);
        place.setXCoordinate(xCoordinate);
        place.setYCoordinate(yCoordinate);
        place.setCity(city);
        place.setType(type);

        return placeRepository.save(place);
    }

    @Override
    public Place editPlace(Long id, String name, double xCoordinate, double yCoordinate, String city, String phoneNumber, String type, boolean hasEntranceFee) {
        Place place = this.getPlaceById(id).orElseThrow(PlaceNotExistent::new);

        place.setName(name);
        place.setXCoordinate(xCoordinate);
        place.setYCoordinate(yCoordinate);
        place.setCity(city);
        place.setPhoneNumber(phoneNumber);
        place.setType(type);
        place.setHasEntranceFee(hasEntranceFee);

        return this.placeRepository.save(place);
    }

}
