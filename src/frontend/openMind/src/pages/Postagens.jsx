import '../styles/postagens.css'
import { Link } from 'react-router-dom'

export default function Postagens(){
    return (
        <>
        <div>
            <h1>Postagens</h1>
            <Link to='/novaPostagem'><button className='botaoPadrao'>Nova postagem</button></Link>
        </div>
        
            
        </>
    )
}