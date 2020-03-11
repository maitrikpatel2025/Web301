import React,{useState} from 'react';
import './Counter.css';
import Number from '../Number/Number';
import Button from '@material-ui/core/Button/Button'
import FromInput from '../FormInput/FormInput';
import CaretButton from '../CaretButton/CaretButton';

const Counter =()=>{
    const [count, setCount] = useState(0);
    const [showDecrement, SetShowdecrement]=useState(false);

    const Decrement=()=>{setCount(count-1)};
    const Reset =()=>{setCount(0)};

    const handleclick = () =>{
        SetShowdecrement(!count(0));
        return(setCount(count+1));
       };
    return(
        <div>
            <div className="Counter_box">
                <Button onClick={handleclick}>+</Button>
                <Number className="Number" count={count}/>
                {showDecrement ? (<Button onClick={Decrement}>-</Button>) :''}
                <Button onClick={Reset}>reset</Button>
            </div>
        </div>

    );
}
    export default Counter;