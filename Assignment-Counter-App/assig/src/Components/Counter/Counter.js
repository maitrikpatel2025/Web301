import React,{useState} from 'react';
import './Counter.css';
import Number from '../Number/Number';
import CaretButton from '../CaretButton/CaretButton';

const CounterBox =()=>{
    const [count, setCount] = useState('');

    return(
        <div>
            <div className="Counter_box">
            <CaretButton className="CaretBtn" handleClick={() => {setCount(count + 1)}}>+</CaretButton>
            <Number className="Number" count={count}/>
            <CaretButton className="CaretBtn"handleClick={() => {setCount(count - 1)}} >-</CaretButton>
            </div>
            <CaretButton handleClick={()=>{alert}}>reset</CaretButton>
            </div>

    )}