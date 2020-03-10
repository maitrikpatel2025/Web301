import React,{useState} from 'react';
import SearchBar from './SearchBar';
import MyTable from './MyTable';

const DataTable =()=>{
    return(
        <div>
            <SearchBar/>
            <MyTable/>
        </div>
    )
}
export default DataTable;