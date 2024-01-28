package mk.dians.finki.places.model.exceptions;

public class WrongCredentials extends RuntimeException{
    public WrongCredentials() {
        super("Внесовте погрешни податоци!");
    }
}
