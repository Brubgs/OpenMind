import express from 'express'
import User from '../models/User.js'
import Category from '../models/Category.js'
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

router.post('/login', async (req,res) => {
    const {email, password} = req.body

    if(!email || !password ){
        return res.status(400).json({message: "Todos os campos são obrigatórios"})
    }

    try {
        const user = await User.findOne({email})

        if(user) {
            const passwordMatch = await bcrypt.compare(password, user.password)

            if(!passwordMatch) {
                return res.status(400).json({message: "Senha incorreta"})
            }
            else {
                return res.status(200).json({message: "Login realizado com sucesso!"})
            }
        }
        else {
            return res.status(400).json({message:"Email não cadastrado"})
        }
    }
    catch(error) {
        console.log("Erro ao fazer login ", error)
        return res.status(500).json({message: 'Erro no servidor'})
    }
})

router.get('/categorias', async(req,res) => {
    try {
        const categorias = await Category.find()
        res.status(200).json(categorias)
    }
    catch(error) {
        console.log('Erro ao listar categorias ', error)
        res.status(500).json({ message: 'Erro ao buscar categorias' });
    }
    
})

export default router