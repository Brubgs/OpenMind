import '../../styles/admin.css'
import { api } from '../../api.js'
import { useState } from 'react'

export default function CriarCategoria(){
    const[data, setData] = useState({name:''})

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('/admin/criarCategoria', data)
            alert(response.data.message)

            setData({name:''})
        }
        catch (error) {
            const msg = error.response?.data?.message;

            if(msg) {
                alert(msg)
            }
            else {
                alert('Erro ao criar categoria. Tente novamente.');
            }
            console.log('Erro ao criar categoria ', error)
        }
    }

    return (
        <>
            <div className='container' >
                <h3>Categoria</h3>
                <form action="" className='formContainer' onSubmit={handleSubmit}>
                    <input className='inputPadrao' type="text" placeholder='Digite a categoria' name='name' value={data.name} onChange={handleChange}/>
                    <button className='botaoPadrao'>Criar</button>
                </form>
            </div>
        </>
    )
}