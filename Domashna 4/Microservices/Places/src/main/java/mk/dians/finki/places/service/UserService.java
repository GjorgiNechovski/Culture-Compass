package mk.dians.finki.places.service;

import mk.dians.finki.places.model.User;
import java.util.Optional;

public interface UserService {
    Optional<User> findById(Long id);
}
