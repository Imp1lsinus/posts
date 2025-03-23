import express from 'express';

import mongoose from 'mongoose';
import {registerValidation,loginValidation} from './valiadations/auths.js' 
import * as usercontrollers from './controllers/usercontrollers.js';
import * as postcontroller from './controllers/postcontroller.js';

import {postCreateValidation} from "./valiadations/auths.js"

import checkAuth from './utils/checkAuth.js';

import { MongoUnexpectedServerResponseError } from 'mongodb';
import handlevallidationerrors from './utils/handlevallidationerrors.js';

mongoose.connect('mongodb+srv://Imp1lsinus:**********@cluster7.lgyya.mongodb.net/blog', {
 // подключает MongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //нужны для стабильной работы Mongoose
})
.then(() => console.log("✅ База данных подключена"))
.catch((err) => console.error("❌ Ошибка подключения к БД:", err));
//Если подключение успешно  выводим " База данных подключена".
//Если ошибка  ловим и выводим " Ошибка подключения к БД".

//Подключаемся к базе данных MongoDB

const app = express()
//создаем веб-сервер.

app.use(express.json() );
//позволяет Express работать с JSON-данными в req.body.

app.post('/auth/login', loginValidation,handlevallidationerrors, usercontrollers.login);
app.post('/auth/register', registerValidation,handlevallidationerrors,usercontrollers.register);
app.get('/auth/me', checkAuth, usercontrollers.getMe);



app.get('/posts', postcontroller.getAll);
app.get('/posts/:id', postcontroller.getOne);
  app.post('/posts',checkAuth, postCreateValidation,handlevallidationerrors, postcontroller.create);
app.delete('/posts/:id',checkAuth, postcontroller.remove);
app.patch('/posts/:id',checkAuth,postCreateValidation, postcontroller.update);






app.listen(4321,(err)=>{

 if (err){

    return console.log(err);
}
console.log("server_on")
})
