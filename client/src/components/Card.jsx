import React from "react";
import { Link } from "react-router-dom";
import { CardDiv, Stats, Button } from "./CardStyle";

const Card = ({ imgFlag, name, id, population, continent }) => {
  return (
    <CardDiv 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 , 
    transition:{duration:0.5}}}  >
      <div >
        <Stats
className={`${continent==="South America"? "Samerica" : continent} || ${continent==="North America"? "Namerica" : continent} || ${continent==="Antarctica"? "Antarctica" : continent}`} 
>
    <img src={imgFlag} alt="img not found" />
          <div></div>
        </Stats>
        <p>{name}</p>
        <p>Population : {population.toLocaleString("es-ES")}</p>
      </div>
      <Link to={`/detail/${id}`}>
        <Button>
          <span>See Details</span>
        </Button>
      </Link>
    </CardDiv>
  );
};

export default Card;
