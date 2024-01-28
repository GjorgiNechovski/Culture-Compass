package mk.dians.finki.review.service;


import mk.dians.finki.review.model.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(Long id);
}
