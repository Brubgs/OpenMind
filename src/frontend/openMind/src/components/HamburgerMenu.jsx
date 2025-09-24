import Hamburger from "hamburger-react";
import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

export default function HamburgerMenu(){
    const [open, setOpen] = useState(false)
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return(
        <>
            <Hamburger 
                size={24}
                toggle={setOpen} 
                toggled={open}
            />
            <ul className={`mobileNav ${open ? 'show' : ''}`}>
                <Link to='/postagens'>Postagens</Link>
                <Link to='/categorias'>Categorias</Link>
                {user ? (
                            <>
                                <Link to='/perfil'>Meu perfil</Link>
                                <Link onClick={handleLogout}>Sair</Link>
                            </>
                        ) : <></>}
            </ul>
        </>
    )
}