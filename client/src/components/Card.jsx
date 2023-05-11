import React from "react";
import { Link } from 'react-router-dom';
import style from "../styles/Card.module.css"
import {CardDiv,} from "./CardStyle";


const Card = ({imgFlag, name, id, population, continent}) => {
    return(
    <CardDiv>
        <div>
            <div className={style.stats}>
                <img src={imgFlag} alt="img not found"/>
                <p  className={style.name}  >{name}</p>
            </div>
            <p>Continent : {continent}</p>
            <p>Poblacion : {population.toLocaleString('es-ES')}</p>
        </div>
        <button className={style.button}>
          <Link to={`/detail/${id}`}>See Details</Link>
        </button>           
    </CardDiv>
    )
}

export default Card