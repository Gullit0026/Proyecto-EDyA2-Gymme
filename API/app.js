import express from "express";
import routesUsuarios from "./routes/usuarios.js";
import bodyParser from 'body-parser';
import dbClient from "./config/dbClient.js";
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

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

try {
  const PORT = process.env.PORT || 3000;
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
