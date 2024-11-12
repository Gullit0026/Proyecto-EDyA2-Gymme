package ProyectoEDyA.Gymme.Service;

import ProyectoEDyA.Gymme.Model.UserModel;
import ProyectoEDyA.Gymme.Repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public Optional<UserModel> getUserById(String id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<UserModel> getUserByCorreo(String correo) {
        return userRepository.findByCorreo(correo);
    }

    @Override
    public UserModel saveUser(UserModel user) {
        return userRepository.save(user);
    }
}
