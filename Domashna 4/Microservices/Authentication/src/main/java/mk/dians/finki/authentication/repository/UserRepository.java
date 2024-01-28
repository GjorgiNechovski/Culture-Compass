package mk.dians.finki.authentication.repository;

import mk.dians.finki.authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findById(Long userId);
    User findByUsername(String username);
    User findByEmail(String email);
}
