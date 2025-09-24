import '../styles/home.css'
import logo from '../assets/LogoPreta.svg'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import CategoriasCard from '../components/CategoriasCard'

import { useContext } from 'react'
import { AuthContext } from '../AuthContext'

export default function Home(){
    const { user } = useContext(AuthContext);

    return(
        <>
            <div className='homeContainer'>
                <section className='hero'>
                    <div className='heroText'>
                        <div>
                            {user ? (
                                <h1>Seja bem vindo(a) ao OpenMind {user.name}!</h1>
                            ): (
                                <h1>Seja bem vindo(a) ao OpenMind!</h1>
                            )}
                            
                            <p>OpenMind é um espaço criado para compartilhar ideias sem rótulos. Aqui, falamos de tudo: tecnologia, comportamento, cotidiano, arte, reflexões, cultura e o que mais despertar a curiosidade. Nosso objetivo é oferecer conteúdos diversos, com uma linguagem acessível e autêntica, que incentive o pensamento aberto e o diálogo. Sinta-se em casa!</p>
                        </div>
                        
                        {!user ? (
                            <div className='heroLink'>
                                <p>Não tem uma conta? Faça <strong>cadastro</strong> aqui</p>
                                <button className='botaoCadastro'><Link to='/cadastro'>Cadastro</Link></button>
                            </div>
                        ): <></>}
                        
                    </div>
                    <div className='heroLogo'>
                        <img src={logo} alt="" />
                    </div>
                </section>

                <section className="postagens">
                    <h2>Leia alguma postagem</h2>
                    <div className="postagensCards">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </section>

                <section className="categorias">
                    <div className='categoriasStart'>
                        <h2>Categorias</h2>
                        <div className='categoriasInput'>
                            <input type="text" name="" id="" placeholder='Pesquise uma categoria'/>
                            <button className='botaoPadrao'>Pesquisar</button>
                        </div>
                    </div>
                    <div className='categoriasCards'>
                        <CategoriasCard type="Futebol"/>
                        <CategoriasCard type="Tecnologia"/>
                        <CategoriasCard type="Arte"/>
                        <CategoriasCard type="Música"/>
                        <CategoriasCard type="Filmes"/>
                        <CategoriasCard type="Saúde Mental"/>
                        <CategoriasCard type="Religião"/>
                        <CategoriasCard type="Estudos"/>
                    </div>
                </section>
            </div>
            
        </>
    )
}