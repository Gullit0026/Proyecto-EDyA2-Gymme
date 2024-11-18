import express from "express";
const route = express.Router();
import UsuarioController from "../controllers/usuarios.js";

route.post('/register', UsuarioController.register);
route.post('/login', UsuarioController.login);
route.get('/getByCorreo/:correo', UsuarioController.getByCorreo);
route.get('/getById/:id', UsuarioController.getById);
route.put('/update/:id', UsuarioController.update);
route.delete('/delete/:id', UsuarioController.delete);

export default route;
