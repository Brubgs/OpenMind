import '../styles/card.css'
import gato from '../assets/images/Nerd cat 1.png'
export default function Card() {
    return(
        <>
            <div className="cardContainer">
                <img src={gato} alt="" />
                <div className='textContainer'>
                    <h2>Titulo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iusto labore similique. A, repellendus. Quae.</p>
                    <button className='cardButton'>Leia mais</button>
                </div>
            </div>
        </>
    )
}