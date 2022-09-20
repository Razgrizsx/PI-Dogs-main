import './dogcard.css'
import { NavLink } from 'react-router-dom'

export default function Dogcard(dog){
    const {nombre, temperamento, peso, imagen, id, años_de_vida} = dog
    return(
        <div className='card'>
            <div className='card-body'>
            <img className='imagen' src={imagen} alt={nombre}></img>
            <p><NavLink className='navlink' to={`/Details/${id}`}>{nombre}</NavLink></p>
            <p>Peso: {peso}</p>
            <p>Temperamento: {temperamento}</p>
            <p>Años de vida: {años_de_vida}</p>
            </div>
        </div>
    )
}