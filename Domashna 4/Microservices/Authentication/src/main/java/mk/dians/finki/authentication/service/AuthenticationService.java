package mk.dians.finki.authentication.service;

import mk.dians.finki.authentication.model.User;

public interface AuthenticationService {
    void registerNewUser(String username, String email, String password);
    User login(String email, String password);

}
