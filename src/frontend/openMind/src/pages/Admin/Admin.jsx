import { Link } from 'react-router-dom'
export default function CriarCategoria(){
    return (
        <>
            <div className='container'>
                <button className="botaoPadrao"><Link to='/admin/criarcategorias'>Criar categoria</Link></button>
            </div>
        </>
    )
}