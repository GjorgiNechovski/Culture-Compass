package mk.dians.finki.backend.service;

import mk.dians.finki.backend.model.User;
import org.springframework.web.bind.annotation.RequestParam;

public interface AuthenticationService {
    void registerNewUser(String username, String email, String name, String password, String confirmPassword);
    User login(String email, String password);

}
