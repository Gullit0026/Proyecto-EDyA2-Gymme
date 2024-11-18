import mongoose from "mongoose";
import 'dotenv/config';

class dbClient{

    constructor(){
        this.conectarBaseDatos();
    }

    async conectarBaseDatos(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/Gymme?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
    }

    async cerrarConexion(){
        try{
            await mongoose.disconnect();
            console.log("Desconectado de la base de datos");
        }catch(e){
            console.log(e);
        }
    }
}

export default new dbClient();