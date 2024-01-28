package mk.dians.finki.review.model.exceptions;

public class UserNameExists extends RuntimeException{
    public UserNameExists() {
        super("Username или email адресата веќе постои!");
    }
}
