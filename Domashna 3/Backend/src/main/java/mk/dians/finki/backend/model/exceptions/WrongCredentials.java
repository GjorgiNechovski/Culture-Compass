package mk.dians.finki.backend.model.exceptions;

public class WrongCredentials extends RuntimeException{
    public WrongCredentials() {
        super("User does not exist!");
    }
}
