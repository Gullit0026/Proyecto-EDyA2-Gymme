import axios from 'axios';

export async function getUsuarioById(id) {
    try {
        const response = await axios.get(`http://localhost:5100/usuarios/getById/${id}`);   
        return response.data;
    } catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        return null; 
    }
}

export async function getUsuarioBycorreo(correo) {
    try {
        const response = await axios.get(`http://localhost:5100/usuarios/getByCorreo/${correo}`);
        return response.data; 
    } catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        return null;  
    }
}
