import axios from "axios";

export async function getUsuarioById(id) {
    try {
        const response = await axios.get(`http://localhost:8080/api/users/getUserById/${id}`);
        console.log("Usuario obtenido por ID: ", response.data);
        if (response.data && response.data.error) {
            console.error("Error al obtener el usuario por ID:", response.data.error);
            return null;
        }
        return response.data;  
    } catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        alert("Hubo un problema con la conexión al servidor. Intenta nuevamente.");
        return null;
    }
}

export async function getUsuarioBycorreo(correo) {
    try {
        const response = await axios.get(`http://localhost:8080/api/users/getUserByEmail/${correo}`);
        console.log("Usuario obtenido por correo: ", response.data);
        if (response.data && response.data.error) {
            console.error("Error al obtener el usuario por correo:", response.data.error);
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        alert("Hubo un problema con la conexión al servidor. Intenta nuevamente.");
        return null;
    }
}
