package mk.dians.finki.places.model.exceptions;

public class UserNameExists extends RuntimeException{
    public UserNameExists() {
        super("Username или email адресата веќе постои!");
    }
}
