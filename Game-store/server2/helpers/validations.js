import { body } from "express-validator"

export const loginValidation = [
    body("email","Неверный формат почты").isEmail(),
    body("password","Пароль должен быть минимум 5 символов").isLength({min: 5}),
]

export const registerValidation = [
    body("email","Неверный формат почты").isEmail(),
    body("password","Пароль должен быть минимум 5 символов").isLength({min: 5}),
    body("fullname","Укажите своё имя").isLength({min: 3}),
]



// const {users} = require('../bd/data.json');
//
// const authorization = ({email,password}) => {
//     return Boolean(users.find(item => item.email == email && item.password == password))
// }
//
// module.exports = authorization