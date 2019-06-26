import Joi from 'joi';
import crypto from 'crypto';
import { user } from '../../models';
import { generateToken }from '../../lib/token.js';

import dotenv from 'dotenv';
dotenv.config();

export const RegStudent = async (ctx) => {

    // Joi를 이용한 형식 검사, 프런트에서 이미 한 차례 검사를 하고 오겠지만, 다시 한 번 검사해 줌.
    // 밑의 Registeration 같은 경우는 형식 검사를 위한 객체를 만드는 과정

    const Registeration = Joi.object().keys({
        number : Joi.string().max(6).required(),
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

    // userCode는 U0001 과 같은 5글자로 표현되는데, 이를 위해서 account 테이블의 모든 데이터를 받아온 후, length로 갯수를 셈.
    // 그 후 for문으로 부족한 0 갯수를 채워주고, 맨 앞에 U를 붙임
    const users = await user.findAll();
    let userCode = (users.length+1).toString();

    for(var i=0;userCode.length<4;i++){
        userCode = "0" + userCode;
    }

    userCode = "U" + userCode;
    
    const id = ctx.request.body.id;

    // 비밀번호를 crypto 모듈을 이용해서 암호화해줌.
    const password2 = crypto.createHmac('sha256', process.env.Password_KEY).update(ctx.request.body.password).digest('hex');


    // 학생 코드는 0이기 때문에 auth 를 0으로 지정해 줌.
    const auth = 0;

    // 데이터베이스에 값을 저장함.
    await user.create({
        "userCode" : userCode,
        "id" : id,
        "password" : password2,
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
    const users = await user.findAll();
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
    
    const LoginInput = Joi.object().keys({
        id : Joi.string().alphanum().min(5).max(50).required(),
        password : Joi.string().min(5).max(50).required()
    })

    const Result = Joi.validate(ctx.request.body, LoginInput);

    // 만약 형식이 불일치한다면, 그 이후 문장도 실행하지 않는다.
    if(Result.error) {
        console.log(`Login - Joi 형식 에러`);
        ctx.status = 400;
        ctx.body = {
            "error" : "001"
        }
        return;
    }

    // 데이터베이스에 해당하는 아이디가 있는지 검사합니다.
    const founded = await user.findAll({
        where: {
            id : ctx.request.body.id
        }
    });

    if(!founded.length){
        console.log(`Login - 존재하지 않는 계정입니다. / 입력된 아이디 : ${ctx.request.body.id}`);
        ctx.status = 400;
        ctx.body = {
            "error" : "003"
        }
        return; 
    }

    const input = crypto.createHmac('sha256', process.env.Password_KEY).update(ctx.request.body.password).digest('hex');

    if(founded[0].password != input){
        console.log(`Login - 비밀번호를 틀렸습니다.`);
        ctx.status = 400;
        ctx.body = {
            "error" : "004"
        }
        return;
    }

    const payload = {
        userCode : founded[0].userCode,
        name : founded[0].name,
        auth : founded[0].auth
    };

    let token = null;
    token = await generateToken(payload);

    console.log(token);

    ctx.body = {
        token : token
    };

    console.log(`로그인에 성공하였습니다.`)
}