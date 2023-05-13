import { useDispatch, useSelector} from "react-redux";
import {getActivities, deleteActivities, filterActivitiesBySeason } from "../redux/actions"
import {Link} from "react-router-dom" 
import ActivityCard from "../components/ActivityCard";
import React,{ useEffect} from "react";
import { ButtonsDiv, CardsDisplayerDiv, TitleDiv } from "./ActivitiesStyles";




const Activities = () => {

    const dispatch = useDispatch();
    const refresh = () => window.location.reload(true)
    const allActivities = useSelector((state) => state.activities)

    const handleDelete = (id) => {
        console.log(id);
         dispatch(deleteActivities(id)); 
    refresh()
    } 

    function handleFilterSeasons(event){
        dispatch(filterActivitiesBySeason(event.target.value))
 
       }

    useEffect(()=>{
        dispatch(getActivities())
        console.log(getActivities);
    },[dispatch])


    return (
<div>
style
    <ButtonsDiv>
    <TitleDiv>
    <h2>ACTIVITIES</h2>
    </TitleDiv>
    <button className="linkToHome">
        <Link to='/home' >Return to Home</Link>
    </button>
    
    <button className="linkToForm">
        <Link to='/form' >Create Activity</Link>
    </button>

    <button className="linkToForm">
        <Link to='/modactivities' >Modify Activity</Link>
    </button>

    <select onChange={e=> handleFilterSeasons(e)}
        >
          <option
          value="All"
          >All Seasons</option>
          <option
          value="Summer"
          >Summer</option>
          <option
          value="Autumn"
          >Autumn</option>
          <option
          value="Winter"
          >Winter</option>
          <option
          value="Spring"
          >Spring</option>
        </select>


    </ButtonsDiv>
    <CardsDisplayerDiv>
     {
  allActivities.map( el=>{
    return <ActivityCard
    key={el.id}
    name={el.name}
    difficulty={el.difficulty}
    id={el.id}   
    duration={el.duration}
    img={el.img}
    season={el.season.map(e=>e).join(", ")}
    country={el.country.map(e=>e).join(", ")}
    handleDelete={()=> handleDelete(el.id)}
    />
})} 
</CardsDisplayerDiv>

{}

</div>

    )
}

export default Activities;