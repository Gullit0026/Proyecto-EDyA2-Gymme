import express from "express";
import routesUsuarios from "./routes/usuarios.js";
import routesChats from "./routes/chats.js";
import bodyParser from 'body-parser';
import dbClient from "./config/dbClient.js";
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

io.on('connection', (socket) => {
  console.log(`Usuario actual: ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`Usuario con id: ${socket.id} se unio a la sala: ${data}`);
  })

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data);
  })

  socket.on('disconnect', () => {
    console.log('Usuario desconectado', socket.id);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', routesUsuarios);

app.use('/chats', routesChats);

try {
  const PORT = 5100;
  server.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
} catch (e) {
  console.log(e);
}

process.on('SIGINT', async () => {
  try {
    await dbClient.cerrarConexion();
  } catch (e) {
    console.log(e);
  }
  process.exit(0);
});