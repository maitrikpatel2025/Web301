import React, { useState } from 'react';
import './App.css';
import SecretComponent from './components/SecretComponent/SecretComponent';

function App() {
  // Setup your state
  // useState takes one parameter initial state.
  // useState returns an array:
  // [state, setState()]
  // const myState = useState('value');
  // console.log(myState);
  const [showSecret, setShowSecret] = useState(false);

  console.log(showSecret);

  // Create a click handler function
  const handleClick = () => {
    // alert('Testing');
    // setState functions take one parameter, the new state value
    setShowSecret(!showSecret);
  };

  return (
    <div className="container">
      <h1>React State Data</h1>
      {showSecret ? (
        <SecretComponent />
      ) : ''}
      <hr/>
      <button
        className="btn btn-primary"
        onClick={handleClick}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
