import { Link, useNavigate } from 'react-router-dom'
import { api } from '../api'
import { useState, useContext } from 'react'
import '../styles/cadastro.css'

import { AuthContext } from '../AuthContext.jsx'

export default function Login(){
    const { login } = useContext(AuthContext);
    
    const navigate = useNavigate()
    const[data, setData] = useState({email: '', password: ''})

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if(!data.email || !data.password) {
                alert('Preencha todos os campos!')
            }
            else {
                const response = await api.post('/login', data)
                console.log("Resposta do login:", response.data)
                alert(response.data.message)

                const user = response.data.user
                login(user)

                setData({email: '', password: ''})

                setTimeout(() => {
                    navigate('/')
                })
            }
            
        }
        catch (error) {
            console.log('Erro ao fazer login ', error)
        }
    }
    return (
        <>
            <div className='container'>
                <h1>Bem vindo(a) de volta ao OpenMind!</h1>
                <form action="" className="formContainer" onSubmit={handleSubmit}>
                    <h3>Faça login</h3>
                    <input type="email" placeholder="Email" name='email' value={data.email} onChange={handleChange}/>
                    <input type="password" placeholder="Senha" name='password' value={data.password} onChange={handleChange}/>

                    <button className="botaoPadrao" type='submit'>Entrar</button>
                    <Link to='/cadastro'>Não tem uma conta? Faça cadastro aqui</Link>
                </form>
            </div>
        </>
    )
}