import React,{ useState } from 'react';
import'./Input.css'
import Modal from '../Modal/Modal';

const Input =()=> {
    const [product,setProduct] = useState('');
    const [error,setError] = useState(null);
    const [showModal,setshowModal] = useState(false);

    const handlesubmit  =()=> {
        e.preventDefault();
        console.log(product);
        setshowModal(true);
    if(product===''){
        setError("invalid input");
    }
    else{
        setError();
    }
    }
    return(
        <div className="Box">
        <div className="form__group" onSubmit={handlesubmit}>
            <div className="form-group">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Product"
                        value={product} onChange={(e)=>setProduct(e.target.value)}/>
                        <div className="input-group-append">
                          <button>save</button>
                            {showModal && <Modal close={() => setshowModal(false)} />}
                        </div>
                        <div className="error_message">{error}
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
};
export default Input;