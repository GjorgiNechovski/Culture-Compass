package mk.dians.finki.review.model.exceptions;

public class PlaceNotExistent extends RuntimeException{
    public PlaceNotExistent() {
        super("The place does not exist!");
    }
}
