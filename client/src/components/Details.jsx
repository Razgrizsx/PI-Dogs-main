import React from "react";
//import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
//import { dogDetails } from "../redux/actions";
import { useEffect } from "react";
import { useState } from "react";
import './Details.css';

 /* const Details = () => {
        
   
   
   useEffect(() => {
      dispatch(dogDetails(id))
    }, []) 
    const {id} = useParams() 
   const dispatch = useDispatch()
   let detalles = useSelector((state) => state.dogdetails)
   let data = detalles.data[0].breed
   console.log(data)
   
    return(
   <div>
      <h1>Nombre: {data}</h1>
   </div>
   )
  
} */
 
/* function Details() {
   
   let {id} = useParams()
   let [detalles, setDetalles] = useState([])
   
   useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
   .then(r => r.json())
   .then((recurso) => {
        setDetalles(recurso);
        console.log(recurso.title)
     
    })}, [id]);
 return (
 <div>
   <h1>Nombre {detalles.title}</h1>
 </div>
 )
}  */

function Details() {
   
   let {id} = useParams()
   let [detalles, setDetalles] = useState([])
   
   useEffect(() => {
   fetch(`http://localhost:3001/dogs/${id}`)
   .then(r => r.json())
   .then((recurso) => {
        setDetalles(recurso);
     
    })}, [id]);
 return (
 <div>
   <br/>
   <img className="imagen" src={detalles.imagen} alt="No hay foto" />
   <div className="div">
   <h1>{detalles.nombre}</h1>
   <p className="p">Peso: {detalles.peso} Kg</p>
   <p className="p">Altura: {detalles.altura} Cm</p>
   <p className="p">Años de vida: {detalles.años_de_vida}</p>
   <p className="p">Temperamento: {detalles.temperamento}</p>
</div>
 </div>
 )
} 

export default Details