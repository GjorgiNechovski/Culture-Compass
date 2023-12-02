package mk.dians.finki.backend.model;



import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serial;
import java.io.Serializable;

@Data
@Entity
@Table(name = "places")
@NoArgsConstructor
@AllArgsConstructor
public class Place implements Serializable {

    @Serial
    private static final long serialVersionUID = 12345L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Name cannot be blank")
    private String name;
    private String city;

    @NotBlank(message = "X coord cannot be blank")
    private double xCoordinate;
    @NotBlank(message = "Y coord cannot be blank")
    private double yCoordinate;

    private Boolean hasEntranceFee;
    private String website;
    private String openingHours;
    private String phoneNumber;
    private String type;

}
