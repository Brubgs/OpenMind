import '../../styles/admin.css'

export default function CriarCategoria(){
    return (
        <>
            <div className='container' >
                <h3>Categoria</h3>
                <form action="" className='formContainer'>
                    <input className='inputPadrao' type="text" placeholder='Digite a categoria'/>
                    <button className='botaoPadrao'>Criar</button>
                </form>
            </div>
        </>
    )
}