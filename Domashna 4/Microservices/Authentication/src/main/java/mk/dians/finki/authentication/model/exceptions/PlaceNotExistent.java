package mk.dians.finki.authentication.model.exceptions;

public class PlaceNotExistent extends RuntimeException{
    public PlaceNotExistent() {
        super("The place does not exist!");
    }
}
