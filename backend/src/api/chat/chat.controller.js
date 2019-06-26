import Joi from 'joi';
import { user, room } from '../../models';
import { generateToken, decodeToken }from '../../lib/token.js';

export const CreateRoom = async (ctx) => {

    const InputForm = Joi.object().keys({
        token : Joi.string().required(),
        roomName : Joi.string().min(2).max(50).required()
    });

    const result = Joi.validate(ctx.request.body, InputForm);

    if(result.error) {
        console.log(`CreateRoom - Joi 형식 에러`);
        ctx.status = 400;
        ctx.body = {
            "error" : "001"
        }
        return;
    }

    const user = await decodeToken(ctx.request.body.token);

    const rooms = await room.findAll();
    let roomCode = (rooms.length+1).toString();

    for(var i=0;roomCode.length<4;i++){
        roomCode = "0" + roomCode;
    }

    roomCode = "R" + roomCode;

    await room.create({
        "roomCode" : roomCode,
        "roomName" : ctx.request.body.roomName,
        "roomMember" : user.userCode,
        "isLeader" : true
    });

    console.log(`CreateRoom - 새로운 채팅방이 생성되었습니다. : ${ctx.request.body.roomName}`);
}

export const LoadUser = async (ctx) => {
    
    const users = await user.findAll();

    let userList = new Array();

    for(var u in users){
        userList.push({
            "userCode" : users[u].userCode,
            "name" : users[u].name,
            "description" : users[u].description
        });
    }

    ctx.body = userList;
}