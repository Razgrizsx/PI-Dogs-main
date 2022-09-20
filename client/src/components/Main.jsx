import React, {useState, useEffect} from "react";
import Dogcards from './Dogcards';
import Pagination from './pagination';
import Card from './card';

export default function Main(){
  const [buscar, setBuscar] = useState()
  const [foundDog, setFoundDog] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(8);
  const [dogdata, setDog] = useState([]);
  
  console.log(setPostPerPage)
  useEffect(() => {
    fetch('http://localhost:3001/dogs')
    .then(r => r.json())
    .then((recurso) => {
         setDog(recurso);  
     })}, []);
  
  const handleChange = (e) => setBuscar(e.target.value)
  const onClickFind = () => setFoundDog(() => dogdata.filter(dog => dog.nombre === buscar ))
  
  const onClickAsc = () => {setDog(dogdata.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0)))}
  const onClickDesc = () => {setDog(dogdata.sort((a,b) => (a.nombre > b.nombre) ? -1 : ((b.nombre > a.nombre) ? 1 : 0)))}
    
    console.log(dogdata)
   
    const lastPostIndex = currentPage * postperPage;
    const firstPostIndex = lastPostIndex - postperPage;
    const currentPost = dogdata.slice(firstPostIndex, lastPostIndex)
    
    return (<div>
        <h1>Pagina Principal</h1>
        <form>
          <div>
            <label htmlFor="title">Raza de perro: </label>
            <input type="text" onChange={handleChange}></input>
          </div>
          <button type="button" onClick={onClickFind}>BUSCAR</button>
        </form>
        <button type='button' onClick={onClickAsc}>Ascendente</button>
        <button type='button' onClick={onClickDesc}>Descendente</button>
        {foundDog.length ? <div><Card foundDog={foundDog}/></div>
        :  <div>
        <Dogcards dogdata={currentPost}/>
        <Pagination totalPosts={dogdata.length} postPerPage={postperPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
      }
        </div>
    )
}