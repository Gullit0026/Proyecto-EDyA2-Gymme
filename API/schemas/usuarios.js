import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
    "_id": String,
    "nombre": String,
    "apellido": String,
    "correo": String,
    "admin": Boolean,
    "plan": String,
    "password": String
});

export default mongoose.model("usuarios", usuariosSchema);