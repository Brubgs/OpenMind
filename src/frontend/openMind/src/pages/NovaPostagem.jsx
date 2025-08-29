import '../styles/novaPostagem.css'
import { api } from '../api.js'
import {useState } from 'react'

export default function NovaPostagem(){
    const [data, setData] = useState({title: '',
        description: '',
        content: ''})

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await api.post('/criarPost', data)
            alert(response.data.message)

            setData({
                title: '',
                description: '',
                content: ''
            })
        }catch(error){
            const msg = error.response?.data?.message;

            if(msg) {
                alert(msg)
                setData({
                    title: '',
                    description: '',
                    content: ''
            })
            }
            else {
                alert('Erro ao criar postagem. Tente novamente.');
            }
            console.log('Erro ao criar postagem ', error)
        }
    }

    return (
        <>
            <div className='novaPostagemContainer'>
                <form className='inputArea' onSubmit={handleSubmit}>
                    <h2>Nova postagem</h2>
                    <label htmlFor="">Título</label>
                    <input type="text" name='title' value={data.title} placeholder='Ex: Como fazer um ovo' className='textInput' onChange={handleChange}/>

                    <label htmlFor="">Descrição</label>
                    <input type="text" name='description' value={data.description} placeholder='Ex: Postagem sobre como fritar um ovo' className='textInput' onChange={handleChange}/>

                    <label htmlFor="">Conteúdo</label>
                    <textarea name="content" id="" value={data.content} placeholder='Pegue um ovo. Pegue a frigideira' onChange={handleChange}></textarea>

                    <div className='upload'>
                        <label htmlFor="">Escolha a capa da postagem</label>
                        <input type="file" />
                    </div>

                    <button className='botaoPadrao'>Postar</button>
                </form>
                
            </div>
        </>
    )
}