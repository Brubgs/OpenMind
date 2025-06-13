import '../styles/card.css'

export default function CategoriasCard(props) {
    return(
        <>
            <button className='categoriasCardContainer'>{props.type}</button>
        </>
    )
}