import { useDispatch, useSelector} from "react-redux";
import {getActivities, deleteActivities } from "../redux/actions"
import {Link} from "react-router-dom" 
import ActivityCard from "../components/ActivityCard";
import React,{ useEffect} from "react";
import style from "../styles/Activities.module.css"




const Activities = () => {

    const dispatch = useDispatch();
    const refresh = () => window.location.reload(true)
    const allActivities = useSelector((state) => state.activities)

    const handleDelete = (id) => {
        console.log(id);
         dispatch(deleteActivities(id)); 
/*          alert("Activity deleted successfully!!") */         
    refresh()
    } 


    useEffect(()=>{
        dispatch(getActivities())
        console.log(getActivities);
    },[dispatch])



/*     {id, name, difficulty, duration, season}        */
    return (
<div>

    <div>
    <button className={style.linkToHome}>
        <Link to='/home' >Return to Home</Link>
    </button>
    <h1>ACTIVITIES</h1>
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
    season={el.season.map(e=>e).join(", ")}
    country={el.country.map(e=>e).join(", ")}
    handleDelete={()=> handleDelete(el.id)}
    />
})} 
</div>

{}

</div>

    )
}

export default Activities;