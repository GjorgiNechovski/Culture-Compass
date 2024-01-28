package mk.dians.finki.review.model.exceptions;

public class PasswordsNotMatching extends RuntimeException{
    public PasswordsNotMatching() {
        super("The passwords do not match!");
    }
}
