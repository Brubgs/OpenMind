import '../styles/header.css'
import HamburgerMenu from './HamburgerMenu'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import { useContext } from 'react'

export function Header(){
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return(
        <>
            <nav className='headerContainer'>
                    <Link to='/' className='brand'>
                        <h2>Open<strong>Mind</strong></h2>
                    </Link>
                    
                <div className='menuContainer'>
                    <ul className='navigation'>
                        <Link to='/postagens'>Postagens</Link>
                        <Link to='/categorias'>Categorias</Link>
                        <Link to='/buscar'>Buscar</Link>
                         {user ? (
                            <>
                                <Link to='/perfil'>Meu perfil</Link>
                                <Link onClick={handleLogout}>Sair</Link>
                            </>
                        ) : <></>}
                    </ul>
                    <div className='menuMobile'>
                        <HamburgerMenu/>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}