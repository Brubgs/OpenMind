import { Link } from 'react-router-dom'
import '../styles/cadastro.css'

export default function Login(){
    return (
        <>
            <div className='container'>
                <h1>Bem vindo(a) de volta ao OpenMind!</h1>
                <form action="" className="formContainer">
                    <h3>Faça login</h3>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>

                    <button className="botaoPadrao">Entrar</button>
                    <Link to='/cadastro'>Não tem uma conta? Faça cadastro aqui</Link>
                </form>
            </div>
        </>
    )
}