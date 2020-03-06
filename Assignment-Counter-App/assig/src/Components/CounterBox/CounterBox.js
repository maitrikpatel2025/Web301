import React,{useState} from 'react';
import CaretButton from './CaretButton/CaretButton';
import './CounterBox.css';
import Number from './Number/Number';
import FromInput from '../FormInput/FormInput';

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }
    export default Counter;