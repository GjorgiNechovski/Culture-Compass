package mk.dians.finki.backend.service.impl;

import mk.dians.finki.backend.model.Place;
import mk.dians.finki.backend.repository.PlaceRepository;
import mk.dians.finki.backend.service.PlaceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlaceServiceImpl implements PlaceService {

    private final PlaceRepository placeRepository;

    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public List<Place> getPlaces(String type, String search){
        if (type!=null && search!=null){
            return this.placeRepository.findByNameContainingIgnoreCaseAndTypeEquals(search, type);
        }
        if (type!=null){
            return this.placeRepository.findByType(type);
        }
        if (search!=null){
            return this.placeRepository.findByNameContainingIgnoreCase(search);
        }
        return this.placeRepository.findAll();
    }

    @Override
    public Optional<Place> getPlaceById(Long id) {
        return placeRepository.findById(id);
    }

}
