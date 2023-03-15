import { useDispatch, useSelector} from "react-redux";
import {getActivities} from "../redux/actions"
 import  {Link} from "react-router-dom" 
import ActivityCard from "../components/ActivityCard";
import React,{ useEffect} from "react";
import style from "../styles/Activities.module.css"




const Activities = () => {

    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.activities)


    useEffect(()=>{
        dispatch(getActivities())
        console.log(getActivities);
    },[dispatch])



/*     {id, name, difficulty, duration, season}        */
    return (
<div>

    <h1>ACTIVITIES</h1>
        <div>
    <button className={style.linkToHome}>
        <Link to='/home' >Return to Home</Link>
    </button>
    </div>
    <div className={style.cardsContainer}>
     {
  allActivities.map( el=>{
    return <ActivityCard
    key={el.id}
    name={el.name}
    difficulty={el.difficulty}
    id={el.id}   
    duration={el.duration}
    season={el.season}
    country={el.country}
    />
})} 
</div>

</div>

    )
}

export default Activities;