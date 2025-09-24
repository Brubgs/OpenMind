import { AuthContext } from "../AuthContext"
import { useContext } from "react"
import '../styles/meuPerfil.css'


export default function MeuPerfil(){
    const {user} = useContext(AuthContext)
    return (
        <>
            <h1>Minhas informações</h1>
            <div className="perfilContainer">
                <div className="perfilImg">

                </div>
                <div className="perfilInfo">
                    <div className="name">
                        <p>{user?.name}</p>
                        <button className="botaoEditar">Editar perfil</button>
                    </div>
                    <div className="bio">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quas quo? Dolorem neque commodi id inventore alias nihil? Sapiente iure quos labore illum dolore corporis.</p>
                    </div>
                    <div className="followers">
                        <p>57 seguidores</p>
                        <p>Entrou em 21/05/2025</p>
                    </div>
                </div>
            </div>
        </>
    )
}
