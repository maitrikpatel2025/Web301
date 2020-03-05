import React from 'react';

import './App.css';
import NavBar from './Components/NavBar/Navbar';
import CounterBox from './Components/CounterBox/CounterBox';
import FromInput from './Components/FormInput/FormInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <CounterBox/>
      </header>
    </div>
  );
}

export default App;
