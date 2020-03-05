import React,{useState} from 'react';
import CaretButton from './CaretButton/CaretButton';
import './CounterBox.css';
import Number from './Number/Number';

const CounterBox =()=>{
    const [count, setCount] = useState('0');
    return(
        <div className="Counter_box">
            <CaretButton className="CaretBtn" handleClick={() => {setCount(count - 1)}}>-</CaretButton>
            <Number className="Number" count={count}/>
            <CaretButton className="CaretBtn"handleClick={() => {setCount(count + 1)}} >+</CaretButton>
        </div>

    )}
    export default CounterBox;