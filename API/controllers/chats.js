import chatsModel from "../models/chats.js";

class ChatsController{
    constructor(){
        
    }

    async send(req, res){
        try{
            const {room, mensajes} = req.body;
            if (mensajes, room) {
              const data = await chatsModel.send({
                room,
                visitedByAdmin: false,
                mensajes
              });
              res.status(200).json(data);
            } else {
              res.status(400).json({error: 'El mensaje no está definido'});
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    async get(req, res){
        try{
            const {room} = req.params;
            const data = await chatsModel.get(room);
            res.status(200).json(data);
        }catch(e){
            res.status(400).json({error: e.message});
        }
    }

    async getAll(req, res){
        try{
            const data = await chatsModel.getAll();
            res.status(200).json(data);
        }catch(e){
            res.status(400).json({error: e.message});
        }
    }

    async addMessage(req, res){
        try{
            const room = req.params.room;
            const {mensaje} = req.body;
            if (mensaje && room) {
              const data = await chatsModel.addMessage(room, mensaje);
              res.status(200).json(data);
            } else {
              res.status(400).json({error: 'El mensaje o la sala no están definidos'});
            }
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }

    async update(req, res){
        try{
            const room = req.params.room;
            const data = await chatsModel.update(room);
            res.status(200).json(data);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }
}

export default new ChatsController();
