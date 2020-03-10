import React from 'react';
import PropTypes from'prop-types';
//import data from'../../Data/Avengers.json';
const MyTable =(props)=>{
    const {data}=props;
    const mappeddata = data.map((Avengers)=>{
       return Avengers.name;
    });
    console.log(mappeddata);
    
        return(
        <div>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th> ID </th>
                        <th> Name</th>
                        <th>Identity</th>
                        <th>Super power</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((Avengers)=>{
                        return(
                            <tr key={Avengers.id}>
                                <td>{Avengers.id}</td>
                                <td>{Avengers.name}</td>
                                <td>{Avengers.SecretIdentity}</td>
                                <td>
                                    <ul>
                                    {Avengers.SuperPower.map((power)=>{
                                    return<li>{power}</li>})}
                                    </ul>
                                </td>
                                <td>{Avengers.active ?'Yes':'No'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
         {//data.map((Avengers)=>{
                //return <p>{Avengers.name}</p>;})
            }
        </div>
    )
}
MyTable.defaultProps ={
  data:[],
};
MyTable.propTypes= {
    data: PropTypes.arrayOf(
        PropTypes.shape({}),)
}
export default MyTable;