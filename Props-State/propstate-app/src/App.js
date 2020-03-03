import React from 'react';
import SecretComponent from './Components/SecretComponent/SecretComponent';
import './App.css';
import { useState } from 'react';

function App() {
  const [showSecret, SetShowSecret]=useState(false);
  console.log(showSecret);
  const handleclick = () =>{
   SetShowSecret(!showSecret);
  };
  return (
    <div className="container">
      <h1>React State Date</h1>
      {showSecret ? (<SecretComponent/>) :''}
      <hr/>
      <button className="btn btn-primary"
      onClick={handleclick}>
        Show
      </button>
    </div>
  );
}

export default App;
