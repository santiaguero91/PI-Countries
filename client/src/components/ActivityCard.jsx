import React from "react";
import style from "../styles/Card.module.css"
import { useLocation } from "react-router-dom"
import { Card } from "./ActivityCardStyle";


const ActivityCard = ({id, name, difficulty, duration, season, country, handleDelete, img}) => {
    
    const location = useLocation();
    return(
    <Card>

    {location.pathname === "/activities" &&
    <button onClick={handleDelete} className={style.closeButton} >X</button> 
    }

    {(img) && <img src={img} alt="activ img"/>}

        <div>
            <div>
               {/* <h4>Actividad {id}</h4> */}
               <h3>{name}</h3>
            </div> 
            <p>Difficulty : {difficulty}</p>
            <p>Duration : {duration} hours</p>
            <p>Season : {season}</p>
            {location.pathname === "/activities" && <p>Countries : {country}</p> }
        </div>
    </Card>
    )
}

export default ActivityCard