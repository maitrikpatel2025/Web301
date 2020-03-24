import React from 'react';
import './CaretButton.css';
import Button from '@material-ui/core/Button/Button'


const CaretButton =(props)=>{
    const {Task,Arrow,Name} = props;

    return(
        <div>
            <Button
              onClick={Task}>
                <i className={`angle ${Arrow} icon huge`}></i>
                 {Name}
             </Button>
         </div>
        

    );}
    export default CaretButton;