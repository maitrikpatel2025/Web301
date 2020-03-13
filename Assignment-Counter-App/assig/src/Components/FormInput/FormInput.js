import React,{useState} from 'react';
import './FormInput.css'
import PropTypes from 'prop-types';
import CaretButton from '../CaretButton/CaretButton'

const FormInput =(props)=>{ 
    const {Reset} = props;
    const [product,setProduct] = useState('');
    const [error,setError] = useState(null);

    const onSubmit =(e)=> {
        e.preventDefault();
        console.log(product)
        if(product===''){
            setError("invalid input");
        }
        else{
            setError();
        }
    }    
    return(
        <div className="Box">

            <div className="form__group">
            <div className="form-group">
             <div className="input-group">
            <input type="text " className="form-control" value={product} onChange={(e)=>setProduct(e.target.value)} />        
            <div className="ip\input-group-append">
            <button className="btn btn-primary" 
             onClick={(e)=>onSubmit(e)}
             Name="Save"
            ></button>
            </div>
            <div>{error}</div>
        </div>
        </div>
        </div>
        </div>

    )
}
FormInput.propTypes={
    onChange: PropTypes.func,
}
 
export default FormInput;