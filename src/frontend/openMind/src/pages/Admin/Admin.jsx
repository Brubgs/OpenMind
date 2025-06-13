import { Link } from 'react-router-dom'
export default function CriarCategoria(){
    return (
        <>
            <button className="botaoPadrao"><Link to='/admin/criarcategorias'>Criar categoria</Link></button>
            
        </>
    )
}