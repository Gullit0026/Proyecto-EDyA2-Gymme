import usuariosModel from "../models/users.js";
import bcrypt from "bcrypt";
import { generarToken } from "../helpers/autenticacion.js";

class UsuariosController{
    constructor(){
        
    }

    async register(req, res){
        try{
            const {_id, nombre, apellido, correo, admin, plan, password} = req.body;
            const usuarioExiste = await usuariosModel.getById(_id);
            const correoExiste = await usuariosModel.getByCorreo(correo);
            if (usuarioExiste || correoExiste){
                return res.status(400).json({error: "El usuario ya existe"});
            }

            const passwordEncriptada = await bcrypt.hash(password, 10);

            const data = await usuariosModel.register({
                _id,
                nombre,
                apellido,
                correo,
                admin,
                plan,
                password: passwordEncriptada
            });

            res.status(200).json(data);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    async login(req, res){
        const {correo, password} = req.body;
        const usuarioExiste = await usuariosModel.getByCorreo(correo);
        if (!usuarioExiste){
            return res.status(400).json({error: "El usuario no existe"});
        }
        const passwordCoincide = await bcrypt.compare(password, usuarioExiste.password);

        if (!passwordCoincide){
            return res.status(400).json({error: "La contraseña no coincide"});
        }
        
        const token = generarToken(correo);

        return res.status(200).json({msg: "Login exitoso", token});
    }

    async update(req, res){
        try{
            const {id} = req.params;
            const data = await usuariosModel.update(id, req.body);
            res.status(200).json(data);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params;
            const data = await usuariosModel.delete(id);
            res.status(206).json(data);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }

    async getById(req, res){
        try{
            const {id} = req.params;
            const data = await usuariosModel.getById(id);
            res.status(200).json(data);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }

    async getByCorreo(req, res){
        try{
            const {correo} = req.params;
            const data = await usuariosModel.getByCorreo(correo);
            res.status(200).json(data);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }
}

export default new UsuariosController();
