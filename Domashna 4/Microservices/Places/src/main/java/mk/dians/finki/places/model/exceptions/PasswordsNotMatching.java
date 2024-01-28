package mk.dians.finki.places.model.exceptions;

public class PasswordsNotMatching extends RuntimeException{
    public PasswordsNotMatching() {
        super("The passwords do not match!");
    }
}
