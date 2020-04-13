import React, { useState,useEffect} from 'react';
import './PokemonDetails.css';
import axios from 'axios';

const PokemonDetails = (props) => {

    const [name, setName] = useState('')
    const [hp,setHp]=useState('')
    const [attack,setAttack]=useState('')
    const [defense,setDefense]=useState('')
    const [speed,setSpeed]=useState('')
    const [specialAttack,setSpecialAttack]=useState('')
    const [specialDefense,setSpecialDefense]=useState('')
  
    const { poke } = props.match.params;
    
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${poke}/`;
    const pokeurl=`https://pokeapi.co/api/v2/pokemon/${poke}/`;
    const Imageurl=`https://pokeres.bastionbot.org/images/pokemon/${poke}.png`
        
    useEffect(()=> {
      axios.get(pokemonUrl)
        .then(res => {setName(res.data.name)
        })},[])

    useEffect(()=> {
        axios.get(pokeurl)
            .then(res => {setHp(res.data.stats[5].base_stat)
            })},[])

    useEffect(()=> {
        axios.get(pokeurl)
            .then(res => {setAttack(res.data.stats[4].base_stat)
            })},[])

    useEffect(()=> {
          axios.get(pokeurl)
              .then(res => {setDefense(res.data.stats[3].base_stat)
              })},[])

    useEffect(()=> {
          axios.get(pokeurl)
              .then(res => {setSpeed(res.data.stats[0].base_stat)
              })},[])

    useEffect(()=> {
          axios.get(pokeurl)
              .then(res => {setSpecialAttack(res.data.stats[2].base_stat)
              })},[])

    useEffect(()=> {
          axios.get(pokeurl)
              .then(res => {setSpecialDefense(res.data.stats[1].base_stat)
              })},[])

    return(
      <div>
        <div className="Info_card">
            <div>
                <img 
                    className="Img_card"
                    src={`${Imageurl}`}/>
            </div>
        <div className="Details_container">
                  <h3 className="Name">
                    {name}
                  </h3>  
            <div className="Info_Table">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th className="bg-danger" scope="col">#</th>
                        <th className="bg-danger" scope="col">Power</th>
                        <th className="bg-danger" scope="col">Point</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Hp</td>
                        <td>{hp}</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Attack</td>
                        <td>{attack}</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Defense</td>
                        <td>{defense}</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Speed</td>
                        <td>{speed}</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>SpecialAttack</td>
                        <td>{specialAttack}</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>SpecialDefense</td>
                        <td>{specialDefense}</td>
                      </tr>
                    </tbody>
                  </table>
                  <span>
                    Source:pokeAPI.co
                  </span>
                </div>
            </div>
          </div>
      </div>
    )
};
export default PokemonDetails;

