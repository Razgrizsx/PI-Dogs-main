import React from "react";
import './Create.css';
//import { useEffect } from "react";
import { useState } from "react";
//nombre, altura, peso, longevidad, temperamento

export default function Create(){


const [input, setInput] = useState(
   {
      nombre: '',
      alturamin: '',
      alturamax: '',
      pesomin: '',
      pesomax: '',
      longevidadmin: '',
      longevidadmax: '',
      temperamento: '',
      temp: '',
      imagen: '',
   }
)

const [error, setError] = useState({})

let handleTempDelete = (e) => {
   e.preventDefault()
   setInput({
      ...input,
      temperamento: ''
   })
}

let handleChange = (e) => {
   setInput({
      ...input,
      [e.target.name]: e.target.value
   });
   setError(validate({
      ...input,
      [e.target.name]: e.target.value
   }))
}

let handleSelect = (e) => {
   setInput({
      ...input,
      temp: e.target.value 
   })
} 

let tempClick = (e) => {
   e.preventDefault()
   if(input.temperamento.includes(input.temp)){
      return 
   }else{
   setInput({
      ...input,
      temperamento: [...input.temperamento, input.temp]
   })}
} 


let handleClick = (e) => {
 e.preventDefault()
 if(!input.nombre || !input.alturamax || !input.alturamin || !input.pesomax || !input.pesomin || !input.longevidadmax || !input.longevidadmin)
 return
 else{
   (async () => {
      const rawResponse = await fetch('http://localhost:3001/dogs', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         nombre: input.nombre, 
         imagen : input.imagen ? input.imagen : "https://cdn-icons-png.flaticon.com/512/194/194279.png",
         altura: `${input.alturamin} - ${input.alturamax}`,
         peso:`${input.pesomin} - ${input.pesomax}`,
         longevidad: `${input.longevidadmin} - ${input.longevidadmax}`,
      })
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
    if(input.temperamento){
    input.temperamento.forEach((e) => {
    (async () => {
      const rawResponse = await fetch('http://localhost:3001/dogs/addtemp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         name: input.nombre,
         temperamento: e
      })
      });
      const content = await rawResponse.json();
    
      console.log(content);
 })()})}
 else{
   return
 }
}}
console.log(input.temperamento)
   return( 
   <form className="form">
      <h1>Crea tu propia raza de perro</h1>
      <div>
         <label>Nombre:</label>
         <br />
         <input className={error.nombre && 'danger'} type='text' name="nombre" onChange={handleChange} value={input.nombre}/>
         {error.nombre && 
         <p className="danger">{error.nombre}</p>
         }
      </div>
      <br />
      <div>
         <label>Imagen:</label>
         <br />
         <input type='text' name="imagen" onChange={handleChange} value={input.imagen}/>
      </div>
      <br />
      <div>
      <label>Altura:</label>
      <br />
         <input className={error.alturamin && 'danger'} placeholder='Minima' type='text' name="alturamin" onChange={handleChange} value={input.alturamin}/>
         {error.alturamin && 
         <p className="danger">{error.alturamin}</p>}
         
         <br />
         <input className={error.alturamax && 'danger'} placeholder='Maxima' type='text' name="alturamax" onChange={handleChange} value={input.alturamax}/>
         {error.alturamax && 
         <p className="danger">{error.alturamax}</p>}
         <br />
         </div>
      <div>
         <label>Peso:</label>
         <br />
         <input className={error.pesomin && 'danger'} placeholder='Minimo' type='text' name="pesomin" onChange={handleChange} value={input.pesomin}/>
         {error.pesomin && 
         <p className="danger">{error.pesomin}</p>}
         <br />
         <input className={error.pesomax && 'danger'} placeholder='Maximo' type='text' name="pesomax" onChange={handleChange} value={input.pesomax}/>
         {error.pesomax && 
         <p className="danger">{error.pesomax}</p>}
      <br />
      </div>
      <br />
      <div>
         <label>Años de vida:</label>
         <br />
         <input className={error.longevidadmin && 'danger'} placeholder='Minima' type='text' name="longevidadmin" onChange={handleChange} value={input.longevidadmin}/>
         {error.longevidadmin && 
         <p className="danger">{error.longevidadmin}</p>}
         <br />
         <input className={error.longevidadmax && 'danger'} placeholder='Maxima' type='text' name="longevidadmax" onChange={handleChange} value={input.longevidadmax}/>
         {error.longevidadmax && 
         <p className="danger">{error.longevidadmax}</p>}
         <br />
      </div>
      {error.diferencia && 
      <p className="danger">{error.diferencia}</p>}
      <br />
      <div>
         <label>Temperamentos:</label>
         <br />
         <input  placeholder={input.temperamento} type='text' name="temperamento" value={input.temperamento}/>
   
<br />
      </div>
      <br />
      <select name="fruit" onChange={handleSelect}>
   <option>Stubborn</option>
   <option>Curious</option>
   <option>Playful</option>
   <option>Adventurous</option>
   <option>Active</option>
   <option>Fun-loving</option>
   <option>Aloof</option>
   <option>Clownish</option>
   <option>Dignified</option>
   <option>Independent</option>
   <option>Happy</option>
   <option>Wild</option>
   <option>Hardworking</option>
   <option>Dutiful</option>
   <option>Outgoing</option>
   <option>Friendly</option>
   <option>Alert</option>
   <option>Confident</option>
   <option>Intelligent</option>
   <option>Courageous</option>
   <option>Loyal</option>
   <option>Brave</option>
   <option>Docile</option>
   <option>Responsive</option>
   <option>Composed</option>
   <option>Receptive</option>
   <option>Faithful</option>
   <option>Loving</option>
   <option>Protective</option>
   <option>Trainable</option>
   <option>Responsible</option>
   <option>Energetic</option>
   <option>Gentle</option>
   <option>Affectionate</option>
   <option>Devoted</option>
   <option>Assertive</option>
   <option>Dominant</option>
   <option>Strong Willed</option>
   <option>Obedient</option>
   <option>Reserved</option>
   <option>Kind</option>
   <option>Sweet-Tempered</option>
   <option>Tenacious</option>
   <option>Attentive</option>
   <option>Steady</option>
   <option>Bold</option>
   <option>Proud</option>
   <option>Reliable</option>
   <option>Fearless</option>
   <option>Lively</option>
   <option>Self-assured</option>
   <option>Cautious</option>
   <option>Eager</option>
   <option>Good-natured</option>
   <option>Spirited</option>
   <option>Companionable</option>
   <option>Even Tempered</option>
   <option>Rugged</option>
   <option>Fierce</option>
   <option>Refined</option>
   <option>Joyful</option>
   <option>Agile</option>
   <option>Amiable</option>
   <option>Excitable</option>
   <option>Determined</option>
   <option>Self-confidence</option>
   <option>Hardy</option>
   <option>Calm</option>
   <option>Good-tempered</option>
   <option>Watchful</option>
   <option>Hard-working</option>
   <option>Feisty</option>
   <option>Cheerful</option>
   <option>Sensitive</option>
   <option>Easygoing</option>
   <option>Adaptable</option>
   <option>Trusting</option>
   <option>Lovable</option>
   <option>Territorial</option>
   <option>Keen</option>
   <option>Familial</option>
   <option>Rational</option>
   <option>Bright</option>
   <option>Quick</option>
   <option>Powerful</option>
   <option>Gay</option>
   <option>Stable</option>
   <option>Quiet</option>
   <option>Inquisitive</option>
   <option>Strong</option>
   <option>Sociable</option>
   <option>Patient</option>
   <option>Suspicious</option>
   <option>Great-hearted</option>
   <option>Merry</option>
   <option>Vocal</option>
   <option>Tolerant</option>
   <option>Mischievous</option>
   <option>People-Oriented</option>
   <option>Bossy</option>
   <option>Cunning</option>
   <option>Athletic</option>
   <option>Boisterous</option>
   <option>Cooperative</option>
   <option>Trustworthy</option>
   <option>Self-important</option>
   <option>Respectful</option>
   <option>Thoughtful</option>
   <option>Generous</option>
   <option>Cat-like</option>
   <option>Sturdy</option>
   <option>Benevolent</option>
   <option>Clever</option>
   <option>Bubbly</option>
   <option>Opinionated</option>
   <option>Aggressive</option>
   <option>Extroverted</option>
   <option>Charming</option>
   <option>Unflappable</option>
   <option>Spunky</option>
   <option>Diligent</option>
   <option>Willful</option>
   <option>Fast</option>
   <option>Vigilant</option>
    
      </select>
      <br />
      <button onClick={tempClick}>Agregar temperamento</button>
      <button onClick={handleTempDelete}>Borrar</button>
      <br />
      <br />
      <div>
         <button onClick={handleClick}>Crear</button>
         
      </div>
      
  <br/>
   </form>
   )
}

const validate = (input) => {

   let error = {};
   if(!input.nombre){
      error.nombre = 'Se necesitan datos'
   }else if(!/^[a-zA-Z\s]*$/.test(input.nombre)){
      error.nombre = 'El dato ingresado no es valido'
   }
   if(!input.alturamax){
      error.alturamax = 'Se necesitan datos'
   }else if(!/^[0-9]*$/.test(input.alturamax)){
      error.alturamax = 'El dato ingresado no es valido'
   }
   if(!input.alturamin){
      error.alturamin = 'Se necesitan datos'
   }else if(!/^[0-9]*$/.test(input.alturamin)){
      error.alturamin = 'El dato ingresado no es valido'
   }
   if(!input.pesomin){
      error.pesomin = 'Se necesitan datos'
   }else if(!/^[0-9]*$/.test(input.pesomin)){
      error.pesomin = 'El dato ingresado no es valido'
   }
   if(!input.pesomax){
      error.pesomax = 'Se necesitan datos'
   }else if(!/^[0-9]*$/.test(input.pesomax)){
      error.pesomax = 'El dato ingresado no es valido'
   }
   if(!input.longevidadmin){
      error.longevidadmin = 'Se necesitan datos'
   }else if(!/^[0-9]*$/.test(input.longevidadmin)){
      error.longevidadmin = 'El dato ingresado no es valido'
   }
   if(!input.longevidadmax){
      error.longevidadmax = 'Se necesitan datos'
   }else if(!/^[0-9]*$/.test(input.longevidadmax)){
      error.longevidadmax = 'El dato ingresado no es valido'
   }
   if(!input.temperamento){
      error.temperamento = 'Se necesitan datos'
   }else if(!/[a-zA-Z]+/.test(input.temperamento)){
      error.temperamento = 'El dato ingresado no es valido'
   }
   if(input.pesomin>input.pesomax || input.alturamax<input.alturamin || input.longevidadmin>input.longevidadmax){
      error.diferencia = 'El valor minimo es mayor al maximo'
   }
   return error
   }


   