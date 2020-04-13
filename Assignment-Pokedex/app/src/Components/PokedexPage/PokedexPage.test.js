import React from 'react';
import ReactDOM from 'react-dom';
import PokedexPage from './PokedexPage';

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<PokedexPage></PokedexPage>,div)
})