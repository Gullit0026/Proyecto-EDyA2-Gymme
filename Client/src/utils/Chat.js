import axios from "axios";

export async function getChats(room) {
    try {
        const response = await axios.get(`http://localhost:5100/chats/get/${room}`);
        return response.data;
    } catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        return null;
    }
}

export async function getAll() {
    try{
        const response = await axios.get(`http://localhost:5100/chats/getAll`);
        return response.data;
    }catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        return null;
    }
}

export async function send(room, messages = []) {
    
    try {
        const response = await axios.post(`http://localhost:5100/chats/send`, { room, mensajes: messages });
        return response.data;
    } catch (error) {
        console.error("Error en la conexión a la API:", error.message);
        return null;
    }
}

export async function addMessage(room, mensaje) {

    try {
        const response = await axios.put(`http://localhost:5100/chats/addMessage/${room}`, { mensaje });
        return response.data;
    }catch (error) {
        console.error('Error en la conexión a la API:', error.message);
        return null;
    }
}

export async function visited(room) {
    try{
        const response = await axios.put(`http://localhost:5100/chats/update/${room}`);
        return response.data;
    }catch (error) {
        console.error('Error en la conexión a la API:', error.message);
    }
}