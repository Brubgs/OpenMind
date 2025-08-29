import express from 'express'
import User from '../models/User.js'
import Category from '../models/Category.js'
import Post from '../models/Post.js'
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

router.get('/usuarios', async(req,res) => {
    try {
        const usuarios = await User.find()
        res.status(200).json(usuarios)
    }
    catch(error) {
         console.log('Erro ao listar usuários', error)
         return res.status(500).json({message: 'Erro ao listar usuários'})
    }
})

router.get('/usuarios/:id', async(req,res) => {
    const {id} = req.params
    try {
        const usuario = await User.findById(id)
        res.status(200).json(usuario)
    }
    catch(error) {
        console.log('Erro ao buscar usuário', error)
        res.status(500).json({ mensagem: 'Erro ao buscar usuário' });
    }
})

router.put('/editarUsuario/:id', async (req,res) => {
    const {name, email, bio} = req.body
    const {id} = req.params
    try {
        if (!name || !email) {
            return res.status(400).json({ mensagem: 'Nome e email devem ser preenchidos' });
        }

        const usuario = await User.findOne({email})
        if(usuario && usuario._id != id){
            return res.status(400).json({ mensagem: 'Email já cadastrado' });
        }
        
        const usuarioAtualizado = await User.findByIdAndUpdate(
            id, 
            {name, email, bio},
            { new: true }
        )

        if (!usuarioAtualizado) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
        
        res.status(200).json(usuarioAtualizado)
    }
    catch(error) {
        console.log('Erro ao editar informações do usuário ', error)
        res.status(500).json({ mensagem: 'Erro ao atualizar usuário' });
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

router.post('/criarPost' , async (req,res) => {
    const {title, description, content} = req.body;

    if(!title || !description || !content ){
        return res.status(400).json({message: "Todos os campos são obrigatórios" })
    }
    
    try {
        const newPost = await Post.create({title, description, content})
        res.status(201).json({message: "Postagem criada com sucesso"})
    }
    catch(error) {
        console.log('Erro ao criar postagem ', error)
    }
})

router.get('/postagens', async (req,res) => {
    try {
        const postagens = await Post.find()
        res.status(200).json(postagens)
    }
    catch(error) {
        console.log('Erro ao listar postagens ', error)
        res.status(500).json({ message: 'Erro ao buscar postagens' });
    }
})


export default router