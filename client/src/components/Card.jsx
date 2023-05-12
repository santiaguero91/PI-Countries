import React from "react";
import { Link } from 'react-router-dom';
import {CardDiv, Stats, Button} from "./CardStyle";

const Card = ({imgFlag, name, id, population, continent}) => {
    return(
    <CardDiv>
        <div>
            <Stats>
                <img src={imgFlag} alt="img not found"/>
                <p >{name}</p>
            </Stats>
            <p>Continent : {continent}</p>
            <p>Poblacion : {population.toLocaleString('es-ES')}</p>
        </div>
        <Link to={`/detail/${id}`}>
        <Button>
         <span>See Details</span> 
        </Button>
        </Link>
    </CardDiv>
    )
}

export default Card