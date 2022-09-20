import './App.css';
import { Route } from 'react-router-dom';
import First from './components/First';
import Navbar from './components/Navbar';
//import Main from './components/Main';
import Details from './components/Details';
import Create from './components/Create';
import Main2 from './components/Filtrado';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={First}/>
      <Route exact path='/Main'><Navbar/><Main2/></Route>
      <Route exact path='/Details/:id'><Navbar/><Details/></Route>
      <Route exact path='/Create'><Navbar/><Create/></Route>
    </div>
  );
}

export default App;
