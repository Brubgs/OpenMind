import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function HamburgerMenu(){
    const [open, setOpen] = useState(false)

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
                <Link to='/perfil'>Meu perfil</Link>
            </ul>
        </>
    )
}