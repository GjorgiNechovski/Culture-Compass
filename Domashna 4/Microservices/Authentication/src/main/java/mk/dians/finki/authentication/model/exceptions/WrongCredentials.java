package mk.dians.finki.authentication.model.exceptions;

public class WrongCredentials extends RuntimeException{
    public WrongCredentials() {
        super("Внесовте погрешни податоци!");
    }
}
