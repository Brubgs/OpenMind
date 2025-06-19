import { Link, useNavigate } from 'react-router-dom'
import { api } from '../api'
import '../styles/cadastro.css'
import { useState } from 'react'


export default function Cadastro() {
    const navigate = useNavigate()
    const[data, setData] = useState({name: '', email: '', password: ''})

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if(!data.name || !data.email || !data.password){
                alert('Preencha todos os campos')
            }
            else {
                const response = await api.post('/cadastro', data)
                alert(response.data.message)

                setData({ name: '', email: '', password: '' });

                setTimeout(() => {
                    navigate('/login')
                })
            }
            
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container'>
                <h1>Seja bem vindo(a) ao OpenMind!</h1>
                <form action="" className="formContainer" onSubmit={handleSubmit}>
                    <h3>Cadastre-se</h3>
                    <input type="text" placeholder="Nome" name='name' value={data.name} onChange={handleChange}/>
                    <input type="email" placeholder="Email" name='email' value={data.email} onChange={handleChange}/>
                    <input type="password" placeholder="Senha" name='password' value={data.password} onChange={handleChange}/>

                    <button className="botaoPadrao" type='submit'>Cadastrar</button>
                    <Link to='/login'>Já tem uma conta? Faça login aqui</Link>
                </form>
            </div>
            
        </>
    )
}