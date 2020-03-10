import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import './FormInput.css'
import  Button  from '@material-ui/core/Button';
const FromInput = () =>{
    const[product,setProduct] = useState('');
    const[productError,setProductError] = useState(null);

    const handleSubmit =()=> {

        if(product===''){
;
            setProductError('Invaild input');
        }
        else{
            setProductError(null);
        }
    }
    return(
        <div className="Box">
            <div className="form__group">
            <div className="ui huge input focus">
                    <input type="text" 
                    placeholder="Product"                      
                    classN="form__field" 
                    id='product' 
                    value={product}                   
                    onChange={(event) => {setProduct(event.target.value); }} required />
                    <button class="ui blue button" onClick={handleSubmit} >Save</button>
           </div>
           <div className="ErrorMessage" >{productError}</div>
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