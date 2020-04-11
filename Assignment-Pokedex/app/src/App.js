import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import PokedexPage from './Components/PokedexPage/PokedexPage';

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar/>,
        <div className="container">
        <PokedexPage/>
        </div>
    </div>
    </Router>
  );
}

export default App;
