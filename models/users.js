import mongoose from "mongoose";
//mongoose – библиотека для работы с MongoDB.
//Позволяет создавать схемы (Schema) и модели (Model).

const UserSchema = new mongoose.Schema
//new mongoose.Schema({...}) – создаем схему, которая описывает структуру документа в MongoDB.
({
    fullName: {
        type: String,
        required:true,
        //fullname – имя пользователя.
//type: String – строка.
//required: true – обязательное поле.
    },
 email: {
    type: String,
    required: true,
    unique: true,
//email – почта пользователя.
//type: String – строка.
//required: true – обязательно для заполнения.
//unique: true – не позволяет создать двух пользователей с одинаковым email.
 },
 passwordHash: {
    type: String,
    required: true,
//passwordHash – захешированный пароль пользователя.
//type: String – строка.
//required: true – обязательно для хранения.
 },

 avatarUrl: String,
//avatarUrl – ссылка на аватар пользователя.
//String – строка, но не обязательная (отсутствует required).

},  
 {
    timestamps:true,
//timestamps: true – автоматически добавляет два поля:
//createdAt – время создания пользователя.
//updatedAt – время последнего обновления.
    },
);

export default mongoose.model('user',UserSchema)
//mongoose.model('user', UserSchema) – создаем модель на основе схемы.
//'user' – имя коллекции в MongoDB (автоматически преобразуется в users).
//export default – позволяет импортировать эту модель в других файлах.