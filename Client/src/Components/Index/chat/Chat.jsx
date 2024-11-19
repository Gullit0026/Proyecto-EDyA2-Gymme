import React, { useState } from "react";
import io from "socket.io-client";
import Mensaje from "./Mensaje";
import "./Chat.css";

const socket = io("http://localhost:5100");
console.log('Cliente conectad al servidor');

const Chat = () => {
    const [correo, setCorreo] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (correo !== "" && room !== "") {
            socket.emit("join_room", room);
            console.log("Unido a la sala:", room);
        }
    }

    return (
        <div className="chat">
            <h3>Chat</h3>
            <input type="text" placeholder="Correo Electrónico" onChange={(e) => setCorreo(e.target.value)}/>
            <input type="text" placeholder="Sala: " onChange={(e) => setRoom(e.target.value)}/>
            <button onClick={joinRoom}>Unirme</button>
            <Mensaje socket={socket} room={room} correo={correo}/>
        </div>
    );
};

export default Chat;
