package mk.dians.finki.places.model.exceptions;

public class PlaceNotExistent extends RuntimeException{
    public PlaceNotExistent() {
        super("The place does not exist!");
    }
}
