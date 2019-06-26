import Router from 'koa-router';
import { CreateRoom, LoadUser } from './chat.controller';


const chat = new Router();

chat.post('/create', CreateRoom);
chat.get('/userList', LoadUser);

export default chat;