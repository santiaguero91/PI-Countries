import React from "react";
import style from "../styles/Card.module.css"


const activityCard = ({id, name, difficulty, duration, season, country, handleDelete}) => {
    
    return(
        <div className={style.card}>
            <button onClick={handleDelete} className={style.closeButton} >X</button>
            <div>
                <div>
                    <h4>Actividad {id}</h4>
                    <h3>{name}</h3>
                    
                </div>
            <div>
            </div>
            <p>Difficulty : {difficulty}</p>
            <p>Duration : {duration} hours</p>
            <p>Season : {season}</p>
            <p>{country}</p>
            <p></p>
            </div>
        </div>
    )
}

export default activityCard