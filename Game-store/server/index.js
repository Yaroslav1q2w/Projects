import express from 'express'
import mongoose from 'mongoose'
import {login} from "./controllers/login.js"
import {register} from "./controllers/register.js"

const app = express()

const PORT = 4000

import {loginValidation, registerValidation} from "./helpers/validations.js"

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.vqljl7l.mongodb.net/node-blog?retryWrites=true&w=majority')
    // .then(() => {
    //     console.log("DB OK")
    // })
    // .catch((err) => console.log("DB error", err))


app.use(express.json())

app.post('auth/login',loginValidation, login)

app.post('/api/register', registerValidation, register)

app.all('*', (request, response) => {
    response.status(404).send('resource not found')
})



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
})