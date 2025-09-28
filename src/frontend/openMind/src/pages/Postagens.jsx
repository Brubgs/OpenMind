import { useState,useEffect } from "react"
import { api } from "../api"
import '../styles/postagens.css'
import { Link } from 'react-router-dom'

export default function Postagens(){
    const [postagens, setPostagens] = useState([])

    async function getPostagens() {
        try {
            const response = await api.get('/postagens')
            return response.data || []
            
        }
        catch(error) {
             console.log("Erro ao listar postagens ", error)
        }
    }

    useEffect(() => {
        async function postagensDados() {
            const response = await getPostagens()
            setPostagens(response)
        }

        postagensDados()
    }, [])

    return (
        <>
            <div className='containerPosts'>
                <div className="searchContainer">
                    <h1>Postagens</h1>
                    <Link to='/novaPostagem'><button className='botaoPadrao'>Nova postagem</button></Link>
                </div>

                <div>
                    {postagens?.map((postagem, index) => (
                        <div key={index} className="postCard">
                            <h3>{postagem.title}</h3>
                            <p>Descrição:{postagem.description}</p>
                            <p>{postagem.content}</p>
                        </div>
                    ))}
                </div>

            </div>
        
            
        </>
    )
}