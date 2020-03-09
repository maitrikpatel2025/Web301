import React,{useState} from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button/Button'
import Number from '../Number/Number';

const Counter =()=>{
    const [count, setCount] = useState(0);
    
    const Increament =() =>{setCount(count + 1)}
    const Decrement =()=>{setCount(count - 1)}
    const Reset =()=>{setCount(0)}

    return(
        
            <div className="Counter_box">
            <Button className="CaretBtn" onClick={Increament}>+</Button>
            <Number className="Number" count={count}/>
            <Button className="CaretBtn" onClick={Decrement}>-</Button>
            <div>
            <Button className="CaretBtn" onClick={Reset}>reset</Button>
            </div>
            </div>
    
        

    );}
    export default Counter;;