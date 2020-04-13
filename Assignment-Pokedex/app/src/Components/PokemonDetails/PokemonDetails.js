import React, { useState,useEffect} from 'react';
import './PokemonDetails.css';
import axios from 'axios';

function PokemonDetails(props) {

    const [name, setName] = useState('')
    const [pokeurl,setPokeurl]=useState('')
    const [stats,setStats] = useState({
        hp: " ",
        attack: " ",
        defense: " ",
        speed: " ",
        specialAttack: " ",
        specialDefense: " "}
        )

        const { poke } = props.match.params;
    
        // Urls for pokemon information
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${poke}/`;
        const pourl=`https://pokeapi.co/api/v2/pokemon/${poke}/`;
        const Imageurl=`https://pokeres.bastionbot.org/images/pokemon/${poke}.png`
        
        useEffect(()=> {
            axios.get(pokemonUrl)
                 .then(res => {setName(res.data.name)
                })},[])
       
         console.log(pokemonUrl)
         useEffect(()=> {
            axios.get(pourl)
                 .then(res => {setPokeurl(res.data.stats)
                })},[])

        let { hp, attack, defense, speed, specialAttack, specialDefense } ='';
            

        console.log(pokeurl)
    
        hp = pokeurl.stat["base_stat"];     
        attack = pokeurl.stat['base_stat'];
    
        defense = pokeurl.stat['base_stat'];
      
        speed = pokeurl.stat['base_stat'];
       
        specialAttack =pokeurl.stat['base_stat'];
     
        specialDefense =pokeurl.stat['base_stat'];
    

    return(
      <div>
        <div class="Info_card">
                <div>
                <img 
                    className="Img_card"
                    src={`${Imageurl}`}/>
                </div>
                <div class="Details_container">
                  <h3 className="Name">
                    {name}
                  </h3>  
                <div className="row align-items-center">
                <p className="">{stats.Mand.hp}</p>
                </div>
                 </div>
            </div>
      </div>
    )
};
export default PokemonDetails;

