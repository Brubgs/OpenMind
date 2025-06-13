import { Link } from 'react-router-dom'
import '../styles/cadastro.css'

export default function Cadastro() {
    return (
        <>
            <div className='container'>
                <h1>Seja bem vindo(a) ao OpenMind!</h1>
                <form action="" className="formContainer">
                    <h3>Cadastre-se</h3>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>

                    <button className="botaoPadrao">Cadastrar</button>
                    <Link to='/login'>Já tem uma conta? Faça login aqui</Link>
                </form>
            </div>
            
        </>
    )
}