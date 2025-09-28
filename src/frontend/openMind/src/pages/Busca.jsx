import { useState, useEffect } from "react"
import { api } from "../api"
import '../styles/busca.css'
import foto from '../assets/images/Nerd cat 1.png'  
export default function Busca(){
    const [users, setUsers] = useState([])

    async function getUsers() {
        try {
            const response = await api.get("/usuarios")
            console.log(response.data)
            return response.data || []
        }
        catch(error) {
            console.log("Erro ao listar usuários", error)
        }
    }

    useEffect(() => {
        async function usersDados() {
            const response = await getUsers()
            setUsers(response)
        }

        usersDados()
    },[])

    return (
        <div className="buscaContainer">
            <div className="inputContainer">
                <input className="inputPadrao" type="text" placeholder="Pesquisar"/>
                <button className="botaoPadrao">Buscar</button>
            </div>
            <div>
                {users?.map((user, index) => (
                            <div key={index} className="userContainer">
                                
                                 <img src={foto} alt="" />
                                
                                <div>
                                    <h4>{user.name}</h4>
                                    <p>{user.bio}</p>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
            
    )
}