import React from 'react';

import './App.css';
import NavBar from './Components/NavBar/Navbar';
import CounterBox from './Components/Counter/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <CounterBox/>
      </header>
    </div>
  );
}

export default App;
