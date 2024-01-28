package mk.dians.finki.places.service.impl;

import mk.dians.finki.places.model.User;
import mk.dians.finki.places.repository.UserRepository;
import mk.dians.finki.places.service.UserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> findById(Long id) {
        return this.userRepository.findById(id);
    }
}
