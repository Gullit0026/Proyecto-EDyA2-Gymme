import mongoose from "mongoose";
import 'dotenv/config';

class dbClient {
  constructor() {
    this.conectarBaseDatos();
  }

  async conectarBaseDatos() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/Gymme?retryWrites=true&w=majority`;
    await mongoose.connect(queryString);
  }

  async cerrarConexion() {
    try {
      const connection = mongoose.connection;
      if (connection && connection.readyState === 1) {
        await mongoose.disconnect();
        console.log("Desconectado de la base de datos");
      } else {
        console.log("No hay conexión a la base de datos");
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getConexion() {
    return mongoose.connection;
  }

  async isConexionActiva() {
    const connection = mongoose.connection;
    return connection && connection.readyState === 1;
  }
}

export default new dbClient();