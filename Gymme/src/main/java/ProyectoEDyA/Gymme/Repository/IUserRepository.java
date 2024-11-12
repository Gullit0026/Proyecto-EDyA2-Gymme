package ProyectoEDyA.Gymme.Repository;

import ProyectoEDyA.Gymme.Model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends MongoRepository<UserModel, String> {
    @Query("{'_id': '?0'}")
    Optional<UserModel> findById(String id);

    @Query("{'correo': '?0'}")
    Optional<UserModel> findByCorreo(String correo);
}
