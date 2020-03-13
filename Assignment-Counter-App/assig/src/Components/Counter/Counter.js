import React,{useState} from 'react';
import './Counter.css';
import Number from '../Number/Number';
import Button from '@material-ui/core/Button/Button'

import CaretButton from '../CaretButton/CaretButton';

const Counter =()=>{
    const [count, setCount] = useState(0);
    const [showDecrement, SetShowdecrement]=useState(false);
    const [product,setProduct] = useState('');
    const [error,setError] = useState(null);

    
    const onSubmit =(e)=> {

        e.preventDefault();
        console.log(product)
        setCount(0);
        if(!count===0){
        SetShowdecrement(!showDecrement);}

        if(product===''){
            setError("invalid input");
        }
        else{
            setError();
        }
    } 
    const Decrement=()=>{
        (setCount(count-1));
        if(count===1){
            SetShowdecrement(!showDecrement);
        }
    }
    const Increment = () =>{
        (setCount(count+1));
        if(count===0){
            SetShowdecrement(!showDecrement);
        }
     };

    return(
        <div>
            <div className="Counter_box">
                <CaretButton Task={Increment} Arrow="up"></CaretButton>
                <Number className="Number" count={count}/>
                {showDecrement ? (<CaretButton Task={Decrement} Arrow="down">-</CaretButton>) :''}
            </div>
        </div>

    );
}
    export default Counter;