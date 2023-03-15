import React from "react";
import style from "../styles/Card.module.css"

const Card = ({id, name, difficulty, duration, season}) => {
    return(
        <div className={style.card}>
            <div>
                <div>
                    <p>#{id}</p>
                    <p>{name}</p>
                    
                </div>
            <div>
            </div>
            <p>difficulty : {difficulty}</p>
            <p>duration : {duration}</p>
            <p>season : {season}</p>
            </div>
        </div>
    )
}

export default Card