package mk.dians.finki.authentication.service;

import mk.dians.finki.authentication.model.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(Long id);
}
