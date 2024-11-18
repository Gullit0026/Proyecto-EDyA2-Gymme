import Usuario from "../schemas/usuarios.js";

class usuariosModel{

    async register(usuario){
        return await Usuario.create(usuario);
    }

    async getByCorreo(correo){
        return await Usuario.findOne({correo});
    }

    async getById(id){
        return await Usuario.findById({_id: id});
    }

    async update(id, usuario){
        return await Usuario.findOneAndUpdate({_id: id}, usuario, {new: true});
    }

    async delete(id){
        return await Usuario.findOneAndDelete(id);
    }
    
}

export default new usuariosModel;
