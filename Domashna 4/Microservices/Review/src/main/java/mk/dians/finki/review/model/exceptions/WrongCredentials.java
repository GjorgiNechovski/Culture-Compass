package mk.dians.finki.review.model.exceptions;

public class WrongCredentials extends RuntimeException{
    public WrongCredentials() {
        super("Внесовте погрешни податоци!");
    }
}
