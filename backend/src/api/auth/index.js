import Router from 'koa-router';
import { Login, RegStudent, RegTeacher } from './auth.controller';

const auth = new Router();

auth.post('/login', Login);
auth.post('/register/student', RegStudent);
auth.post('/register/teacher', RegTeacher);

export default auth;