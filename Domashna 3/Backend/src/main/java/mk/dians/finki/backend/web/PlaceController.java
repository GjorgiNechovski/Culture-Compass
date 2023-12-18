package mk.dians.finki.backend.web;

import mk.dians.finki.backend.model.Place;
import mk.dians.finki.backend.service.PlaceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/places")
public class PlaceController {


    private final PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @GetMapping
    public List<Place> getAllPlaces(
            @RequestParam(name = "type", required = false) String type,
            @RequestParam(name = "search", required = false) String search,
            @RequestParam(name = "fee", required = false) boolean fee,
            @RequestParam(name = "city", required = false) String city
    ) {
        return placeService.getPlaces(type, search, fee, city);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable Long id) {
        Optional<Place> placeOptional = placeService.getPlaceById(id);

        return placeOptional
                .map(place -> new ResponseEntity<>(place, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/cities")
    public List<String> getAllCities(){
        return this.placeService.getAllCities();
    }
    @RequestMapping(method = RequestMethod.POST, value = "/addLocation", consumes = "multipart/form-data")
    public ResponseEntity<Place> savePlace(
            @RequestParam String name,
            @RequestParam double xCoordinate,
            @RequestParam double yCoordinate,
            @RequestParam String city,
            @RequestParam(value = "image", required = false) MultipartFile imageUrl,
            @RequestParam(required = false) String phoneNumber,
            @RequestParam String type,
            @RequestParam (required = false) boolean hasEntranceFee) {

        Place savedPlace = null;

        try {
            savedPlace = placeService.savePlace(name, xCoordinate, yCoordinate, city, imageUrl, phoneNumber, type, hasEntranceFee);
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        return new ResponseEntity<>(savedPlace, HttpStatus.CREATED);
    }
}
