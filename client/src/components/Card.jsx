import React from "react";
import style from "../styles/Card.module.css"

const Card = ({imgFlag, name, id, population, capital, continent}) => {
    return(
        <div className={style.card}>
            <div>
                <div className={style.stats}>
                    <p  className={style.id}  >#{id}</p>
                    <p  className={style.name}  >{name}</p>
                    
                </div>
            <div>
            <img src={imgFlag} alt="img not found" width="150px" height="100px"/>
            </div>
            <p>Poblacion : {population}</p>
            <p>Capital : {capital}</p>
            <p>Continent : {continent}</p>
            </div>
        </div>
    )
}

export default Card