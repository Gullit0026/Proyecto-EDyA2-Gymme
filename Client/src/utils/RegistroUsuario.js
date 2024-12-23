import axios from "axios";

async function registroUsuario(usuario) {
    try {
        const response = await axios.post(`http://localhost:5100/usuarios/register`, usuario);
        return response.data;  
    } catch (error) {
        throw new Error('Error en la conexión a la API: ' + error.message);
    }
}

export default registroUsuario
