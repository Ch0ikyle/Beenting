import Joi from 'joi';
import crypto from 'crypto';
import { user } from '../../models';

import dotenv from 'dotenv';
dotenv.config();

export const RegStudent = async (ctx) => {

    // Joi를 이용한 형식 검사, 프런트에서 이미 한 차례 검사를 하고 오겠지만, 다시 한 번 검사해 줌.
    // 밑의 Registeration 같은 경우는 형식 검사를 위한 객체를 만드는 과정
    const Registeration = Joi.object().keys({
        number : Joi.string().max(2).required(),
        name : Joi.string().min(2).max(50).required(),
        id : Joi.string().alphanum().min(5).max(50).required(),
        password : Joi.string().min(5).max(50).required()
    });

    // request로 넘어온 데이터와 위에서 만든 객체를 비교함, 옳지 않으면 밑의 조건문에서 오류를 반환하게 됨.
    const result = Joi.validate(ctx.request.body, Registeration);

    if(result.error) {
        console.log(`RegStudent - Joi 형식 에러`);
        ctx.status = 400;
        ctx.body = {
            "error" : "001"
        }
        return;
    }

    // 아이디 중복 여부 검사
    const exist = await user.findAll({
        where : {
            id : ctx.request.body.id
        }
    });

    if(exist.length){
        console.log(`RegStudent - 아이디 중복 : ${ctx.request.body.id}`);
        ctx.status = 400;
        ctx.body = {
            "error" : "002"
        }
        return;
    }

    // DB 저장 위한 데이터 정리
    const users = await account.findAll();
    let userCode = (users.length+1).toString();

    for(var i=0;userCode.length<4;i++){
        userCode = "0" + userCode;
    }

    userCode = "U" + userCode;

    const password = crypto.createHmac('sha256', process.env.Password_KEY).update(ctx.request.body.password).digest('hex');

    const auth = 0;

    user.create({
        "userCode" : userCode,
        "id" : ctx.request.body.id,
        "password" : password,
        "auth" : auth,
        "number" : ctx.request.body.number,
        "name" : ctx.request.body.name
    });

    console.log(`RegStudent - 신규 회원 저장 : ${ctx.request.body.name}`);
}

export const RegTeacher = async (ctx) => {

    // Joi를 이용한 형식 검사, 프런트에서 이미 한 차례 검사를 하고 오겠지만, 다시 한 번 검사해 줌.
    // 밑의 Registeration 같은 경우는 형식 검사를 위한 객체를 만드는 과정
    const Registeration = Joi.object().keys({
        name : Joi.string().min(2).max(50).required(),
        id : Joi.string().alphanum().min(5).max(50).required(),
        password : Joi.string().min(5).max(50).required()
    });

    // request로 넘어온 데이터와 위에서 만든 객체를 비교함, 옳지 않으면 밑의 조건문에서 오류를 반환하게 됨.
    const result = Joi.validate(ctx.request.body, Registeration);

    if(result.error) {
        console.log(`RegTeacher - Joi 형식 에러`);
        ctx.status = 400;
        ctx.body = {
            "error" : "001"
        }
        return;
    }

    // 아이디 중복 여부 검사
    const exist = await user.findAll({
        where : {
            id : ctx.request.body.id
        }
    });

    if(exist.length){
        console.log(`RegTeacher - 아이디 중복 : ${ctx.request.body.id}`);
        ctx.status = 400;
        ctx.body = {
            "error" : "002"
        }
        return;
    }

    // DB 저장 위한 데이터 정리
    const users = await account.findAll();
    let userCode = (users.length+1).toString();

    for(var i=0;userCode.length<4;i++){
        userCode = "0" + userCode;
    }

    userCode = "U" + userCode;

    const password = crypto.createHmac('sha256', process.env.Password_KEY).update(ctx.request.body.password).digest('hex');

    const auth = 1;

    user.create({
        "userCode" : userCode,
        "id" : ctx.request.body.id,
        "password" : password,
        "auth" : auth,
        "number" : null,
        "name" : ctx.request.body.name
    });

    console.log(`RegTeacher - 신규 회원 저장 : ${ctx.request.body.name}`);
}

export const Login = async (ctx) => {
    
}