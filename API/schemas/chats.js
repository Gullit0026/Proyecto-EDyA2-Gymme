import mongoose from "mongoose";

const chatsSchema = new mongoose.Schema({
    room: String,
    visitedByAdmin: Boolean,
    mensajes: [{
      texto: String,
      autor: String,
      time: String
    }]
  });

export default mongoose.model("chats", chatsSchema);
