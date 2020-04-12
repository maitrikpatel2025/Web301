import React,{useState,useEffect} from "react";
import "./PokemonCard.css";

const PokemonCard = (props) =>{
 
   const {Name,url} = props;
   const [name,setName] = useState(''); 
   const [pokeIndex,setPokeIndex] = useState('');
   const [imageurl,setImageurl] = useState('');
   const [imageLoading,setImageLoading] = useState(true)
   const [toManyRequestes,setToManyRequestes] = useState(false)
    
const handleimg = () =>{
    const pokeIndex = url.split('/')[url.split('/').length-2]
    const setImageurl=`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png`
    const onLoad=() => setImageLoading(false)
    const onError=() => setToManyRequestes(true)
}

    return (
        <div className="col-md-3  col-sm-6 mb-5">
            <div className="card">
            {}
             <img src={`${handleimg}`}/>
        
               <div className="container">
                    <h4 className="Poke_name"><b>
                    {Name}
                    </b></h4> 
                </div>
             </div>
        </div>
         
    )
};
export default PokemonCard;
