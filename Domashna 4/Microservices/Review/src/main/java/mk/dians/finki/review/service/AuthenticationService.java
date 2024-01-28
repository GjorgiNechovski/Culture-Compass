package mk.dians.finki.review.service;


import mk.dians.finki.review.model.User;

public interface AuthenticationService {
    void registerNewUser(String username, String email, String password);
    User login(String email, String password);

}
