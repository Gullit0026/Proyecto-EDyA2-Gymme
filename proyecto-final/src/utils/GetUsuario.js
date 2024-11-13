import axios from 'axios';

export async function getUsuarioById(id) {
    try {
        const response = await axios.get(`http://localhost:8080/api/users/getUserById/${id}`);        
        return response.data;
    } catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        return null; 
    }
}

export async function getUsuarioBycorreo(correo) {
    try {
        const response = await axios.get(`http://localhost:8080/api/users/getUserByEmail/${correo}`);
        
        return response.data; 
    } catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        return null;  
    }
}
