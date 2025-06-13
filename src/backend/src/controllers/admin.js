import express from 'express'
import Category from '../models/Category.js'

const router = express.Router()

router.post('/criarCategoria', async (req,res) => {
    const {name} = req.body

    if(!name){
        return res.status(400).json({message: "Preencha o nome da categoria"})
    }

    try {
        const findCategory = await Category.findOne({name})

        if(findCategory) {
            return res.status(400).json({message: "Catgoria já cadastrada"})
        }

        const newCategory = await Category.create({name})
        res.status(201).json({message:"Categoria criada com sucesso"})
    }
    catch(error) {
        console.log('Erro ao cadastrar categoria', error)
    }
})

export default router