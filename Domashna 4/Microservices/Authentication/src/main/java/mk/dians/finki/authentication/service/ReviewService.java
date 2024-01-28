package mk.dians.finki.authentication.service;


import mk.dians.finki.authentication.model.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {

    List<Review> getAllReviewsByPlaceId(Long placeId);

    Optional<Review> getReviewByPlaceIdAndId(Long placeId, Long reviewId);

    void deleteReview(Long reviewId);

    Review saveReview(Long placeId, Long userId, Review review);
}
