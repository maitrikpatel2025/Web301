import React, { useState } from 'react';
import './App.css';
import CaretButton from './Components/CaretButton/CaretButton';
import Number from './Components/Number/Number';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1 className="text-center">Counter Application</h1>
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <CaretButton handleclick={()=>setCount(count - 1)}>
          minus
          </CaretButton>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Number count={count}/>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <CaretButton handleclick={()=>setCount(count + 1)}>
            PLUS
          </CaretButton>
        </div>
      </div>
    </div>
  );
}

export default App;

//()=>setcount()=