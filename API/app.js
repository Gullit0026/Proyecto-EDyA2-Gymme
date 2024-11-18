import 'dotenv/config';
import express from "express";
import routesUsuarios from "./routes/usuarios.js";
import bodyParser from 'body-parser';
import dbClient from "./config/dbClient.js";

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', routesUsuarios);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
} catch (e) {
  console.log(e);
}

process.on('SIGINT', async () => {
  dbClient.cerrarConexion();
  process.exit(0);
});