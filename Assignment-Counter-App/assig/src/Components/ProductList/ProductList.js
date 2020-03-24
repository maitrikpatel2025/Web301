import React,{ useState } from 'react';
import uuid from 'uuid/v1'
import './ProductList.css';

const ProductList =()=>{
 const [item,setItem] = useState([{id:1, name:'product', unit:'unit'}]);
 const additem=()=>{
     setItem([...item,{id:uuid(), name:'newproduct', unit:'newunit'}])
 };
 

    return(
        <div className="Product_box">
          <h1>Product</h1>
          <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map(items=>{
                    return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unit}</td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>
            <button onClick={additem}>submit</button>
         </div>
        

    );}
    export default ProductList;