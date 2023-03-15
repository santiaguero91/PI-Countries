import React from "react";
import style from "../styles/Card.module.css"

const activityCard = ({id, name, difficulty, duration, season, country}) => {
    return(
        <div className={style.card}>
            <div>
                <div>
                    <h4>Actividad {id}</h4>
                    <h3>{name}</h3>
                    
                </div>
            <div>
            </div>
            <p>Difficulty : {difficulty}</p>
            <p>Duration : {duration} min</p>
            <p>Season : {season}</p>
            <p>{country}</p>
            </div>
        </div>
    )
}

export default activityCard