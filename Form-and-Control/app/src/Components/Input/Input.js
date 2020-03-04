import React,{useState} from 'react';
import'./Input.css';

const Input = (props) => {

    const [error,setError] = useState(null);

    const handleBlur = () => {
        const {value,onBlur}= props;
        if(onBlur){
        onBlur();
        }
        if(value===''){
            // Create an error
            setError('Invaild input');
        }
        else{
            setError(null);
        }

    }

    return(         
        <div>   
            <input 
              {...props} 
              className={`${props.className}CustomInput`}
              onBlur={handleBlur}
              />
              <div className="customInputError">{error}</div>
        </div> 
    )

}
export default Input;
