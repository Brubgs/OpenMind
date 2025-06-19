import { useState } from "react"
import { api } from "../api"
import { useEffect } from "react"
import '../styles/categorias.css'

export default function Categorias(){
    const[categorias, setCategorias] = useState([])

    async function getCategorias(){
        try {
            const response = await api.get('/categorias')
            return response.data || []
        }
        catch(error) {
            console.log("Erro ao listar categorias ", error)
        }
    }

    useEffect(() => {
        async function categoriaDados() {
            const response = await getCategorias()
            setCategorias(response)
        }

        categoriaDados()
    },[])

    return (
        <>
        <div className="categoriasContainer">
            <div className="titleContainer">
                <h1>Categorias</h1>
                <div className='categoriasInput'>
                    <input type="text" name="" id="" placeholder='Pesquise uma categoria'/>
                    <button className='botaoPadrao'>Pesquisar</button>
                </div>
            </div>
            
            <ul className="containerCategorias">
                {categorias?.map((categoria, index) => (
                    <li key={index} className="cards">
                        {categoria.name}
                    </li>
                ))}
            </ul>
        </div>
            
        </>
    )
}