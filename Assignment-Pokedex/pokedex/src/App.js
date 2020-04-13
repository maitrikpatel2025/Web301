import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import PokedexPage from './Components/PokedexPage/PokedexPage';
import PokemonDetails from './Components/PokemonDetails/PokemonDetails';

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={PokedexPage} />
          <Route exact path="/pokemon/:poke" component={PokemonDetails}/> 
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
