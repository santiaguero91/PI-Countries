import React from "react";
import style from "../styles/Card.module.css"

import allActivities from "../views/Activities"

const activityCard = ({id, name, difficulty, duration, season, country}) => {


    function onClose(id){
        allActivities.filter(el=> el.id!==id)
  }
    
    return(
        <div className={style.card}>
            <button onClick={onClose} className={style.closeButton} >X</button>
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
            <p></p>
            </div>
        </div>
    )
}

export default activityCard