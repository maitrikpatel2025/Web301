import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './FormInput.css'
import  Button  from '@material-ui/core/Button';
const FromInput = () =>{
    const[product,setProduct] = useState('');
    const[productError,setProductError] = useState(null);
    const handleSubmit =()=> {
        if(product===''){
            setProductError('Invaild input');
        }
        else{
            setProductError(null);
        }
    }
    return(
        <div className="Box">
            <div class="form__group field">
            <input type="text"
                    class="form__field" 
                    id='product' 
                    value={product}                   
                    onChange={(event) => {setProduct(event.target.value); }} required />
                    <span class="highlight"></span><span class="bar"></span>
                   <label>Name</label>
                    <div className="ErrorMessage">{productError}</div> 
                    </div>
        </div>
        )
}
export default FromInput;            
/*<div className="Text_Input" ><TextField variant="outlined" label="Product" /></div>
<div className="Input" ><Button variant="contained" color="primary">
    Save
</Button>
                            <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={handleSubmit}
                         >Submit
                        </button>
</div>*/