import React,{ useState, useEffect } from 'react';
import './Counter.css';
import Number from '../Number/Number';
import CaretButton from '../CaretButton/CaretButton';
import Modal from '../Modal/Modal';



const Counter =()=>{
    const [count, setCount] = useState(0);
    const [showDecrement, SetShowdecrement]=useState(false);
    const [product,setProduct] = useState('');
    const [error,setError] = useState(null);


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
        e.preventDefault();
        console.log(product)
        setCount(0);
        SetShowdecrement(!showDecrement);
        if(product===''){
            setError("invalid input");
        }
        else{
            setError();
        }
    
    };



    return(
        <div>

            <div className="Counter_box">
                <CaretButton Task={Increment} Arrow="up"></CaretButton>
                <Number className="Number" count={count}/>
                {showDecrement ? (<CaretButton Task={Decrement} Arrow="down">-</CaretButton>) :''}
            </div>

            <div className="Box">
                <div className="form__group">
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Product"
                                value={product} onChange={(e)=>setProduct(e.target.value)}/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" 
                                    onClick={(e)=>onSubmit(e)}> save
                                    </button>
                                </div>
                                <div className="error_message">{error}
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
    export default Counter;