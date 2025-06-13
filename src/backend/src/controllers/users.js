import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const router = express.Router()


router.post('/cadastro', async (req, res) => {
    const{ name,email,password } = req.body

    if(!name || !email || !password ){
        return res.status(400).json({message: "Todos os campos são obrigatórios"})
    }

    if(password.length < 8) {
        return res.status(400).json({ mensagem: 'A senha deve ter pelo menos 6 caracteres.' })
    }

    try {
        const findUser = await User.findOne({email})
        if(findUser) {
            return res.status(400).json({message: "Email já cadastrado"})
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await User.create({ name, email, password: hash })
        res.status(201).json({message:"Usuário cadastrado com sucesso"})
    }
    catch(error) {
        console.log('Erro ao cadastrar usuário', error)
    }
})

export default router