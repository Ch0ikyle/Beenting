// 환경 변수 로드
import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';

import socket from 'socket.io';

const app = new Koa();
const router = new Router();
import api from './api';

// MariaDB 연결을 위해 sequelize를 사용합니다.
import { sequelize } from './models';
sequelize.sync();

import bodyParser from 'koa-bodyparser';

app.use(cors());

const io = socket(app);

const port = process.env.PORT || 3500;

app.use(bodyParser()); // 바디파서 적용, 라우터 적용코드보다 상단에 있어야합니다.
//app.use(jwtMiddleware);
router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`Beenting Server On - ${port}`);
});