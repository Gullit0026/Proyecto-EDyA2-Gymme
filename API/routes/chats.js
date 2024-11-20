import express from "express";
const route = express.Router();
import ChatsController from "../controllers/chats.js";

route.post('/send', ChatsController.send);
route.get('/get/:room', ChatsController.get);
route.get('/getAll', ChatsController.getAll);
route.put('/addMessage/:room', ChatsController.addMessage);
route.put('/update/:room', ChatsController.update);

export default route;
