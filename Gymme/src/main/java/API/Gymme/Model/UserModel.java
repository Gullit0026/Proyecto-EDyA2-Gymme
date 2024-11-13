package API.Gymme.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Usuarios")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserModel {
    @Id
    private String _id;
    private String nombre;
    private String apellido;
    private String correo;
    private boolean admin;
    private String clave;
}
