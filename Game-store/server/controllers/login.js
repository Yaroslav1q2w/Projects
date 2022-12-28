import UserModel from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
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
}