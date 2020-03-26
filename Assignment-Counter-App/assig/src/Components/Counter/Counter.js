import React,{ useState, } from 'react';
import './Counter.css';
import Number from '../Number/Number';
import CaretButton from '../CaretButton/CaretButton';
import Modal from '../Modal/Modal'




const Counter =()=>{
    const [count, setCount] = useState(0);
    const [showDecrement, SetShowdecrement]=useState(false);
    const [product,setProduct] = useState('');
    const [error,setError] = useState(null);
    const [showModal,setshowModal] = useState(false);



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


    const handlesubmit =(e)=> {
        setCount(0);
        SetShowdecrement(!showDecrement);
        setshowModal(true);
        e.preventDefault();
        console.log(product);
      
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
            <div>
               <div className="Box" >
                <form onSubmit={handlesubmit}> 
                <label>ADD Product</label>
                 <input type="text" className="form-control" placeholder="Product"
                    value={product} onChange={(e)=>setProduct(e.target.value)}/>
                    <input type="submit" value="Save"  />          
                     {showModal && <Modal close={() => setshowModal(false)} />}
                    <div className="error_message">{error}
                    </div>
                 </form> 
            </div>
            </div>

        </div>

    );
}
    export default Counter;