import React, { useState, useEffect} from "react";
import axios from "axios";
import "./PokemonList.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

const PokemonList = () => {
   
    const [pokemon,setPokemon] = useState([]);

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
             .then(res => {setPokemon(res.data['results'])
            })},[])
    

    
    return (
        <div>
        {pokemon ? (
          <div className="row">
            {pokemon.map(pokemon => (
              <PokemonCard
              key={pokemon.name}
              Name = {pokemon.name}
              url ={pokemon.url}
              Id= {pokemon.id}/>
            ))}
          </div>
        ) : (
          <h1>Loading</h1> 
        )}
      </div>
    
    )
};

export default PokemonList;