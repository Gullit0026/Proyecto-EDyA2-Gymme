package API.Gymme.Controller;

import API.Gymme.DataNotFound;
import API.Gymme.Model.UserModel;
import API.Gymme.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor()
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getUserById/{_id}")
    public ResponseEntity<?> getUserById(@PathVariable String _id) {
        UserModel userModel = userService.getUserById(_id)
                .orElseThrow(() -> new DataNotFound("El usuario con id '" + _id + "' no está registrado"));
        return ResponseEntity.ok(userModel);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getUserByEmail/{correo}")
    public ResponseEntity<UserModel> getUserByEmail(@PathVariable String correo) {
        UserModel userModel = userService.getUserByCorreo(correo)
                .orElseThrow(() -> new DataNotFound("El correo '" + correo + "' no está registrado"));
        return ResponseEntity.ok(userModel);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/register")
    public ResponseEntity<UserModel> registerUser(@RequestBody UserModel user) {
        UserModel savedUser = userService.saveUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
}
