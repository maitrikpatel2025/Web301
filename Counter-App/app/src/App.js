import React, { useState } from 'react';
import './App.css';

import Number from './components/Number/Number';
import CaretButton from './components/CaretButton/CaretButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="text-center">Counter Application</h1>
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <CaretButton handleClick={() => setCount(count - 1)}>
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </CaretButton>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Number count={count} />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <CaretButton handleClick={() => {
            console.log('other thing');
            return setCount(count + 1);
          }}>
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </CaretButton>
        </div>
      </div>
    </div>
  );
}

export default App;
