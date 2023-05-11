import React from "react";
import { Link } from 'react-router-dom';
import {CardDiv, Stats} from "./CardStyle";


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
        <button >
          <Link to={`/detail/${id}`}>See Details</Link>
        </button>           
    </CardDiv>
    )
}

export default Card