package mk.dians.finki.authentication.model.exceptions;

public class UserNameExists extends RuntimeException{
    public UserNameExists() {
        super("Username или email адресата веќе постои!");
    }
}
