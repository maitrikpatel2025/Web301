import React,{useState} from "react";
import "./PokemonCard.css";

const PokemonCard = (props) =>{
 
    const {Name,URL} = props;

   const [name,setName] = useState('');
   const [pokeIndex,setPokeIndex] = useState('');
   const [imageurl,setImageurl] = useState('');


    return (
        <div className="col-md-3  col-sm-6 mb-5">
            <div class="card">
              <img src="img_avatar.png" />
               <div class="container">
                    <h4><b>{Name}</b></h4>
                </div>
             </div>
        </div>
         
    )
};
export default PokemonCard;
