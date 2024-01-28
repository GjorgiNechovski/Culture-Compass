package mk.dians.finki.places.service;

import mk.dians.finki.places.model.User;
import org.springframework.web.bind.annotation.RequestParam;

public interface AuthenticationService {
    void registerNewUser(String username, String email, String password);
    User login(String email, String password);

}
