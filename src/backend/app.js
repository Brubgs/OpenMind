import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './src/controllers/users.js'

const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost/openmind").then(()=> {
    console.log("Conectado ao mongo")
}).catch((error) => {
    console.log("Erro ao conectar com mongo")
})

app.use('/', userRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando!')
})
