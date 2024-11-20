import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { addMessage, visited } from "../../../utils/Chat";
import "./Chat.css";

const socket = io("http://localhost:5100");
console.log("Cliente conectado al servidor");

const Chat = ({ handleCerrarChat, correo, messagesList, setMessagesList, admin, allChats, setAllChats }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(correo);

  const convertTo24HourTime = (timeStr) => {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier === 'p.m.' && hours !== 12) {
      hours += 12; 
    } else if (modifier === 'a. m.' && hours === 12) {
      hours = 0; 
    }

    return new Date(2000, 0, 1, hours, minutes, 0);
  };

  const sortChatsByVisitStatusAndTime = (chats) => {
    return chats.sort((a, b) => {
      if (a.visitedByAdmin === false && b.visitedByAdmin === true) {
        return -1;
      }
      if (a.visitedByAdmin === true && b.visitedByAdmin === false) {
        return 1;
      }

      if (a.visitedByAdmin === false && b.visitedByAdmin === false) {
        const lastMessageA = a.mensajes[a.mensajes.length - 1];
        const lastMessageB = b.mensajes[b.mensajes.length - 1];

        const timeA = convertTo24HourTime(lastMessageA.time).getTime();
        const timeB = convertTo24HourTime(lastMessageB.time).getTime();

        return timeA - timeB;
      }

      return 0;
    });
  };

  const sendMessage = async (chatRoom) => {
    if (correo !== "" && currentMessage.trim() !== "") {
      const newMessage = {
        texto: currentMessage,
        autor: correo,
        time: new Date().toLocaleTimeString(),
      };

      const updatedChat = await addMessage(chatRoom, newMessage);
      console.log("chatRoom: " + chatRoom + " newMessage: " + newMessage.autor + " " + newMessage.texto + " " + newMessage.time);
      if (updatedChat) {
        setMessagesList(updatedChat.mensajes);
      }

      socket.emit("send_message", newMessage);
      setCurrentMessage("");
    }
  };

  const handleChatClick = (chatRoom) => {
    const selected = allChats.find(chat => chat.room === chatRoom);
    setSelectedChat(selected.room);
    setMessagesList(selected.mensajes);

    if (selected && selected.visitedByAdmin === false) {
      visited(selected.room)
        .then(() => {
          const updatedChats = allChats.map(chat =>
            chat._id === selected._id ? { ...chat, visitedByAdmin: true } : chat
          );
          setAllChats(sortChatsByVisitStatusAndTime(updatedChats));
        })
        .catch((error) => {
          console.error('Error actualizando el chat:', error);
        });
    }
  };

  useEffect(() => {
    const messageHandle = (data) => {
      setMessagesList((list) => [...list, data]);
    };

    socket.on("receive_message", messageHandle);

    return () => socket.off("receive_message", messageHandle);
  }, []);

  useEffect(() => {
    setAllChats(sortChatsByVisitStatusAndTime(allChats));
  }, [allChats]);

  const sortedChats = sortChatsByVisitStatusAndTime(allChats);

  return (
    <div className={`container-chat ${admin ? "container-chat-admin" : "container-chat-user"}`}>
      {admin && (
        <div className="admin-panel">
          <h3>Chats Disponibles</h3>
          <div className="chat-list">
            {sortedChats.map((chat) => (
              <div
                key={chat.room}
                className={`chat-item ${selectedChat?.room === chat.room ? "chat-item-selected" : ""}
                ${chat.visitedByAdmin ? "" : "chat-not-visited"}`}
                onClick={() => handleChatClick(chat.room)}
              >
                {chat.room}
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedChat && (
        <div className="chat-room">
          <div className="titulo-chat">
            <div className="close-button-chat-container">
              <button className="close-button-chat" onClick={handleCerrarChat}>
                X
              </button>
            </div>
          </div>
          <div className="mensajes-chat">
            <div className="mensajes-list">
              {messagesList.map((item) => (
                <div
                  key={item._id}
                  className={`mensaje ${item.autor === correo ? "mensaje-usuario" : item.autor === "Sistema" ? "mensaje-sistema" : "mensaje-otro"}`}
                >
                  <div className="autor-container">
                    <span className="autor">{item.autor}</span>
                  </div>
                  <div className="msg-hora">
                    <div className="mensaje-texto-container">
                      <span className="mensaje-texto">{item.texto}</span>
                    </div>
                    <div className="hora-container">
                      <span className="hora">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="input-chat-container">
            <div className="input-chat">
              <input
                type="text"
                value={currentMessage}
                placeholder="Mensaje..."
                onKeyPress={(e) => (e.key === "Enter" ? sendMessage(selectedChat) : null)}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="mensaje-input-chat"
              />
              <button onClick={() => sendMessage(selectedChat)} className="send-button-chat">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
