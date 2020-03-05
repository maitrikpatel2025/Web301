import React,{useState} from 'react';
import CaretButton from './CaretButton/CaretButton';
import './CounterBox.css';
import Number from './Number/Number';
import FromInput from '../FormInput/FormInput';

const CounterBox =()=>{
    const [count, setCount] = useState('0')
    return(
        <div>
             <div className="Counter_box">
            <CaretButton className="CaretBtn" handleClick={() => {setCount(count + 1)}}>+</CaretButton>
            <Number className="Number" count={count}/>
            <CaretButton className="CaretBtn"handleClick={() => {setCount(count - 1)}} >-</CaretButton>
            </div>
            <CaretButton handleClick={()=>{setCount(count)}}> reset</CaretButton>
            <FromInput 
            onclick={() => {setCount({count:0})} }/>
            </div>

    )}
    export default CounterBox;