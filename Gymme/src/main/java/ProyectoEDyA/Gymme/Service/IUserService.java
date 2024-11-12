package ProyectoEDyA.Gymme.Service;

import ProyectoEDyA.Gymme.Model.UserModel;

import java.util.Optional;

public interface IUserService {
    Optional<UserModel> getUserById(String id);

    Optional<UserModel> getUserByCorreo(String correo);

    UserModel saveUser(UserModel user);
}
