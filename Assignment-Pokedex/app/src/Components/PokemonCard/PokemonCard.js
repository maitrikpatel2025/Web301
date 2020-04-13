import React,{useState} from "react";
import "./PokemonCard.css";
import {Link, useParams} from 'react-router-dom';
import Button from "@material-ui/core/Button"

const PokemonCard = (props) =>{
 
   const {Name,url} = props;
   const [loadimage,setLoadimage] = useState(true);
   const [request,setRequest]=useState(false);


   const poke = url.split('/')[url.split('/').length - 2];
   const Imageurl=`https://pokeres.bastionbot.org/images/pokemon/${poke}.png`
   
   const handleload = () => {
    setLoadimage(false);
    setRequest(true);
   }
    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <Link to={`pokemon/${poke}`}>
            <div class="card">
                <div>
                 {loadimage ? (<img 
                    src={`${Imageurl}`} 
                    className={handleload}/>) : (null) }
                </div>
                <div class="container">
                  <h4 className="Poke_name">
                    <Button variant="contained" className="Btn">
                    {Name}
                    </Button>
                  </h4>  
                 </div>
            </div>
            </Link>
      </div>
         
    )
};
export default PokemonCard;
