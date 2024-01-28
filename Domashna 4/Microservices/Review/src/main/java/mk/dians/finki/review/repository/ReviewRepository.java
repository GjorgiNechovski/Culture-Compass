package mk.dians.finki.review.repository;

import mk.dians.finki.review.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findByPlaceIdAndId(Long placeId, Long reviewId);

    List<Review> findAllByPlaceId(Long placeId);
    void deleteByPlaceIdAndId(Long placeId, Long reviewId);
}

