import React from "react";
import { Link } from 'react-router-dom';
import {CardDiv, Stats} from "./CardStyle";
import Button from '@mui/material/Button';

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
        <Button className="btn" variant="outlined">
         <span>See Details</span> 
        </Button>
        </Link>
    </CardDiv>
    )
}

export default Card