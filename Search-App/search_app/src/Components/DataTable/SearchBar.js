import React,{useState} from 'react';
import PropTypes from 'prop-types';

const SearchBar =(props)=>{
    const {onChange,search} = props;       
    return(
        <div className="form-group">
         <div className="input-group">
            <input type="text " className="form-control" onChange={onChange} />        
            <div className="ip\input-group-append">
            <button className="btn btn-primary" onClick={search}>search</button>
        </div>
        </div>
        </div>

    )
}

SearchBar.propTypes={
    onChange: PropTypes.func,
    search: PropTypes.func,
}
 
export default SearchBar;