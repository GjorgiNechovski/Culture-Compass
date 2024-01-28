package mk.dians.finki.authentication.model.exceptions;

public class PasswordsNotMatching extends RuntimeException{
    public PasswordsNotMatching() {
        super("The passwords do not match!");
    }
}
