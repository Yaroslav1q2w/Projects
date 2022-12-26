import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {validationResult} from "express-validator"

const app = express()

const PORT = 4000

import {registerValidation} from "./helpers/authorization.js"
import UserModel from "./models/users.js"

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.vqljl7l.mongodb.net/node-blog?retryWrites=true&w=majority')
    .then(() => {
        console.log("DB OK")
    })
    .catch((err) => console.log("DB error", err))

app.use(express.json())

app.post('auth/login',async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})

        if (!user){
            return res.status(404).json({
                message: "Пользователь не найден"
            })
        }

        const isValidationPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if (!isValidationPass){
            return res.status(404).json({
                message: "Неверный логин или пароль"
            })
        }

        const token = jwt.sign(
            {
                _id: user._id
            },
            "secret123",
            {
                expiresIn: "30d"
            }
        )

        const {passwordHash, ...userData} = user._doc

        res.json({
            ...userData,
            token
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось авторизоваться"
        })
    }
})

app.post('/api/register', registerValidation, async (res, req) => {
    try {
        const errors = validationResult(req)
        if (!errors.$isEmpty()) {
            return res.status(400).join(errors.array())
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            fullname: req.body.fullname,
            passwordHash: hash
        })

        const user = await doc.save()

        const token = jwt.sign(
            {
                _id: user._id
            },
            "secret123",
            {
                expiresIn: "30d"
            }
        )

        const {passwordHash, ...userData} = user._doc

        res.json({
            ...userData,
            token
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось зарегистрироваться"
        })
    }
})

app.get


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
})