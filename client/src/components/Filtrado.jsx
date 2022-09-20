import React, {useState, useEffect} from "react";
import Dogcards from './Dogcards';
import Pagination from './pagination';
import './first.css'
import './filtrado.css'


export default function Main2(){
  const [buscar, setBuscar] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(8);
  const [dogdata, setDog] = useState([]);
  const [order, setOrder] = useState('asc')
  const [order2, setOrder2] = useState('asc')
  const [temp, setTemp] = useState('')
  const [db, setDb] = useState('Ambos')
  
  console.log(setPostPerPage)
  useEffect(() => {
    fetch('http://localhost:3001/dogs')
    .then(r => r.json())
    .then((recurso) => {
         setDog(recurso);  
     })}, []);

     let handleSelect2 = (e) => {
      setDb(e.target.value)
      setCurrentPage(1)
   } 
  
     let handleSelect = (e) => {
      setTemp(e.target.value)
      setCurrentPage(1)
   } 
     console.log(temp)
     const searcher = (e) => {
        setBuscar(e.target.value)
     }
     
     
     let results = []
    
     if(!buscar)
     {
        results=dogdata
     }else{
            results = dogdata.filter((dato) => 
            dato.nombre.toLowerCase().includes(buscar.toLowerCase()) 
        )
     }



   if(db==='Ambos'){
      results = results
     }else if(db==='Existentes'){
      results = results.filter((dato) =>
      dato.id<300)
      
     }else if(db==='Creadas'){
      results = results.filter((dato) =>
      dato.id>=300)
      
     } 
     console.log(results)
    if(!temp){
      results = results
     }else{
      var resultswithoutundefined = results.filter((e) => {
        return e.temperamento !== undefined;
     });
      results = resultswithoutundefined.filter((dato) =>
        dato.temperamento.toLowerCase().includes(temp.toLowerCase())
       ) 
     }
 
    
    console.log(resultswithoutundefined)
   
    const lastPostIndex = currentPage * postperPage;
    const firstPostIndex = lastPostIndex - postperPage;
    const currentPost = results.slice(firstPostIndex, lastPostIndex)

    const sorting = () => {
      if(order === 'asc'){
        const sorted = [...dogdata].sort((a, b) => a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1);
        setDog(sorted);
        setOrder('dsc')
      }
      if(order === 'dsc'){
        const sorted = [...dogdata].sort((a, b) => a.nombre.toLowerCase() < b.nombre.toLowerCase() ? 1 : -1);
        setDog(sorted);
        setOrder('asc')
    }}
    
    const sorting2 = () => {
      if(order2 === 'asc'){
        const sorted = [...dogdata].sort((a, b) => parseInt(a.peso) > parseInt(b.peso) ? 1 : -1);
        setDog(sorted);
        setOrder2('dsc')
      }
      if(order2 === 'dsc'){
        const sorted = [...dogdata].sort((a, b) => parseInt(a.peso) < parseInt(b.peso) ? 1 : -1);
        setDog(sorted);
        setOrder2('asc')
      }
    } 

    return (<div>
      <br/>
          <div>
            <label htmlFor="title">Raza de perro: </label>
            
            <input placeholder="Buscar" type="text" value={buscar} onChange={searcher}></input>
          </div>
          <br/>
          <div>
          <button className="button" type='button' onClick={() => sorting()}>Ordenar alfabeticamente</button>
          </div>
          <br/>
          <div>
          <button className="button" type='button' onClick={() => sorting2()}>Ordenar por peso</button>
          </div>
          <div className="filtrado">
            <label>Filtrar por origen</label>
          <select name='filtro' onChange={handleSelect2}>
            <option>Ambos</option>
            <option>Existentes</option>
            <option>Creadas</option>
          </select>
          </div>
          <div className="filtrado">
          <label>Filtrar por Temperamento</label>
          <select name="fruit" onChange={handleSelect}>
            <option></option>
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
      </div>
      
      <br/>
      <div>
        <Dogcards dogdata={currentPost}/>
        <Pagination totalPosts={results.length} postPerPage={postperPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
      </div>
        
    )
}

