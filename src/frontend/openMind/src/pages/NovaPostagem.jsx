import '../styles/novaPostagem.css'

export default function NovaPostagem(){
    return (
        <>
            <div className='novaPostagemContainer'>
                <div className='inputArea'>
                    <h2>Nova postagem</h2>
                    <label htmlFor="">Título</label>
                    <input type="text" name='title' placeholder='Ex: Como fazer um ovo' className='textInput'/>

                    <label htmlFor="">Descrição</label>
                    <input type="text" name='description' placeholder='Ex: Postagem sobre como fritar um ovo' className='textInput'/>

                    <label htmlFor="">Conteúdo</label>
                    <textarea name="content" id="" placeholder='Pegue um ovo. Pegue a frigideira'></textarea>

                    <div className='upload'>
                        <label htmlFor="">Escolha a capa da postagem</label>
                        <input type="file" />
                    </div>

                    <button className='botaoPadrao'>Postar</button>
                </div>
                
            </div>
        </>
    )
}