import React,{useState} from 'react';
import SearchBar from './SearchBar';
import MyTable from './MyTable';
import Avengers from'../../Data/Avengers.json';

const DataTable =()=>{
    const [data, setData]= useState(Avengers);
    const [query, setQuery]=useState('');
 
    const search=()=>{
        const filteredData = Avengers.filter((Avengers)=>{
            const AvengersValues = Object.values(Avengers);
            console.log(Avengers)
            const AllValues= AvengersValues.reduce((acc,cv) => {
                return acc+''+cv;
            });
            console.log(AllValues);
            return AllValues.includes(query);
        });
        setData(filteredData);
    };
    console.log(query);
    return(
        <div>
            <SearchBar query={query} onChange={(e)=>setQuery(e.target.value)} search={search} />
            <MyTable data={data}/>
        </div>
    )
}
export default DataTable;