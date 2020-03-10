import React from 'react';
import PropTypes from'prop-types';
import hardCodedData from'../../Data/Avengers.json';
const MyTable =(props)=>{
    const {data}=props;
    const mappedhardCodedData = hardCodedData.map((Avengers)=>{
       return Avengers.name;
    });
    console.log(mappedhardCodedData);
    
        return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name</th>
                        <th>Identity</th>
                        <th>Super power</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {hardCodedData.map((Avengers)=>{
                        return(
                            <tr>
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
         {//hardCodedData.map((Avengers)=>{
                //return <p>{Avengers.name}</p>;})
            }
        </div>
    )
}
MyTable.propTypes= {
    data: PropTypes.arrayOf(
        PropTypes.shape({}),)
}
export default MyTable;