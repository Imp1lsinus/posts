import { body } from "express-validator";
//Импортируем функцию body из express-validator.
//Она позволяет проверять и валидировать данные в req.body.

export const loginValidation = [
    body('email', ' неверный формат почты').isEmail(),
    body('password', 'пароль от 5 символов').isLength({min:5 }),
];

export const registerValidation = [
//Экспортируем массив registerValidation.
//Этот массив содержит список правил для проверки данных.

    body('email','Неверно указана почта').isEmail(),
//body('email') – проверяет поле email в req.body.
//isEmail() – проверяет, является ли значение корректным email.
//'Неверно указана почта' – сообщение об ошибке, если проверка не пройдет.

body ('password','Пароль должен состоять минимум из 5 симоволов').isLength({min: 5 }),

//body('password') – проверяет поле password в req.body.
//isLength({ min: 5 }) – требует минимум 5 символов.
//'Пароль должен состоять минимум из 5 символов' – сообщение об ошибке.

body('fullName','Имя должно состоять минимум из 3 символов ').isLength({min: 3 }),

//body('fullname') – проверяет fullname в req.body.
//isLength({ min: 3 }) – требует минимум 3 символа.
//'Имя должно состоять минимум из 3 символов' – сообщение об ошибке.

body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),

//body('avatarUrl') – проверяет avatarUrl в req.body.
//.optional() – делает это поле необязательным.
//.isURL() – если поле передано, проверяет, является ли оно корректной ссылкой.
//'Неверная ссылка на аватарку' – сообщение об ошибке.

]
export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
    body('tags', 'Неверный формат тэгов').optional().isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  ];