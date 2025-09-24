import { useState } from "react"
import { api } from "../../api"
import { useEffect } from "react"
import '../../styles/categorias.css'

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

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`admin/deletarCategoria/${id}`)
            alert(response.data.message)  
        }
        catch (error) {
            console.error("Erro ao excluir publicação:", error);
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
            
            <ul className="containerCategoriasAdm">
                {categorias?.map((categoria) => (
                    <li key={categoria._id} className="cardsAdm">
                        {categoria.name}
                        <button className="botaoExcluir" onClick={() => handleDelete(categoria._id)}>Excluir</button>
                    </li>
                ))}
                
            </ul>
        </div>
            
        </>
    )
}