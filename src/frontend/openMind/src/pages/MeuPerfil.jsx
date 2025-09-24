import { AuthContext } from "../AuthContext"
import { useContext } from "react"

export default function MeuPerfil(){
    const {user} = useContext(AuthContext)
    return (
        <>
            <h1>MeuPerfil</h1>
            <p>{user.name}</p>
        </>
    )
}
