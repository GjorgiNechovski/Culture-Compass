package mk.dians.finki.backend.service.impl;

import mk.dians.finki.backend.model.Place;
import mk.dians.finki.backend.model.Review;
import mk.dians.finki.backend.model.Users;
import mk.dians.finki.backend.repository.ReviewRepository;
import mk.dians.finki.backend.service.ReviewService;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private RestTemplate restTemplate;

    public List<Review> getAllReviewsByPlaceId(Long placeId) {
        return reviewRepository.findAllByPlaceId(placeId);
    }

    public Optional<Review> getReviewByPlaceIdAndId(Long placeId, Long reviewId) {
        return reviewRepository.findByPlaceIdAndId(placeId, reviewId);
    }

    public Review saveReview(Long placeId, Long userId, Review review) {

        Users users = restTemplate.getForEntity("http://localhost:8080/api/currentUser/" + userId, Users.class).getBody();
        Place place = restTemplate.getForEntity("http://localhost:8081/api/places/id/" + placeId, Place.class).getBody();

        if(Objects.isNull(users) || Objects.isNull(place)){
            return null;
        }

        review.setPlaceId(place.getId());
        review.setUserId(users.getId());
        
        return reviewRepository.save(review);
    }

    public void deleteReview(Long reviewId) {
        reviewRepository.delete(reviewRepository.findById(reviewId).get());
    }
}
