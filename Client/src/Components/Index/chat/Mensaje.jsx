import React, { useEffect, useState } from "react";

const Mensaje = ({socket, room, correo}) => {

    const [currentMessage, setCurrentMessage] = useState("")
    const [messagesList, setMessagesList] = useState([])

    const sendMessage = async () => {
        if (correo !== "" && room !== "") {
            const info ={
                message: currentMessage,
                room,
                author: correo,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };

            await socket.emit("send_message", info)
            setMessagesList((list) => [...list, info])
        }
    }

    useEffect(() => {
        const messageHandle = (data) => {
            setMessagesList((list) => [...list, data])
        }

        socket.on("receive_message", messageHandle);

        return () => socket.off("receive_message", messageHandle);
    }, [socket])

    return(
        <div>
            <section>
                <p>Chat en vivo</p>
            </section>
            <div>
                {messagesList.map((item, i) => {
                    return <span key={i}>{item.author}: {item.message} - {item.time}</span>
                })}
            </div>
            <section>
                <input type="text" placeholder="Mensaje..." onChange={(e) => setCurrentMessage(e.target.value)}/>
                <button onClick={sendMessage}>Enviar</button>
            </section>
        </div>
    )
}

export default Mensaje
