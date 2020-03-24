import React,{ useState, } from 'react';
import './Counter.css';
import Number from '../Number/Number';
import CaretButton from '../CaretButton/CaretButton';
import { Input } from '@material-ui/core';




const Counter =()=>{
    const [count, setCount] = useState(0);
    const [showDecrement, SetShowdecrement]=useState(false);



    const Increment = () =>{
        (setCount(count+1));
        if(count===0){
            SetShowdecrement(!showDecrement);
        }
     };


    const Decrement=()=>{
        (setCount(count-1));
        if(count===1){
            SetShowdecrement(!showDecrement);
        }
    };


    const onSubmit =(e)=> {
        setCount(0);
    
        SetShowdecrement(!showDecrement);
    };



    return(
        <div>

            <div className="Counter_box">
                <CaretButton Task={Increment} Arrow="up"></CaretButton>
                <Number className="Number" count={count}/>
                {showDecrement ? (<CaretButton Task={Decrement} Arrow="down">-</CaretButton>) :''}
            </div>
            <div>
                <Input/>
            </div>

        </div>

    );
}
    export default Counter;