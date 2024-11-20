import Chat from "../schemas/chats.js";

class chatsModel {
    async send(data) {
        return await Chat.create(data);
    }

    async get(room) {
        const chat = await Chat.findOne({ room });
        if (!chat) {
          throw new Error(`Chat no encontrado con la propiedad room ${room}`);
        }
        return chat;
      }

    async getAll() {
        return await Chat.find();
      }

    async addMessage(room, mensajes) {
        const chat = await Chat.findOne({ room });
        chat.visitedByAdmin = false;
        chat.mensajes.push(mensajes);
        return await chat.save();
      }

    async update(room) {
        const chat = await Chat.findOne({room});
        chat.visitedByAdmin = true;
        return await chat.save();
    }
}

export default new chatsModel;
