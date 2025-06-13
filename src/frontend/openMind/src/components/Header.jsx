import '../styles/header.css'
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom'

export function Header(){
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
                        <Link to='/perfil'>Meu perfil</Link>
                    </ul>
                    <div className='menuMobile'>
                        <HamburgerMenu/>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}