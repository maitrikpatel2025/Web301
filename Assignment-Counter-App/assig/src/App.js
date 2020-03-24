import React from 'react';

import './App.css';
import NavBar from './Components/NavBar/Navbar';
import CounterBox from './Components/Counter/Counter';
import ProductList from './Components/ProductList/ProductList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div><CounterBox/></div>
      <div><ProductList/></div>
      
    </div>
  );
}

export default App;
