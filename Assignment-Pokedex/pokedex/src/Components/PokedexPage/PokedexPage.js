import React from "react";
import "./PokedexPage.css";
import PokemonList from "../PokemonList/PokemonList";

const PokedexPage = () => {
    
 return(
     <div className="row">
         <div className="col">
             <PokemonList/>
         </div>
     </div>
 )
}
export default PokedexPage;