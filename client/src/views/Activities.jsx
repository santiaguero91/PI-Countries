import { useDispatch, useSelector} from "react-redux";
import {getActivities, deleteActivities, filterActivitiesBySeason } from "../redux/actions"
import {Link} from "react-router-dom" 
import ActivityCard from "../components/ActivityCard";
import React,{ useEffect} from "react";
import { ButtonsDiv, CardsDisplayerDiv, TitleDiv } from "./ActivitiesStyles";
import { motion } from "framer-motion/dist/framer-motion"




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
    <motion.div
    initial={{scaleY:0}}
    animate={{scaleY:1}}
    exit={{scaleY:0, transition:{duration:0.2}}}
    >
    <TitleDiv
    initial={{x: 1000}} animate={{ x: 0 , transition:{duration:0.8}}}
    >
    <h2>ACTIVITIES</h2>
    </TitleDiv>
    <ButtonsDiv
    initial={{scaleY:0}}
    animate={{scaleY:1}}
    transition={{ delay: 1 , transition:{duration:0.3}}}
    >
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
    <CardsDisplayerDiv
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ delay: 1.5 , transition:{duration:0.3}}}
    >
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

</motion.div>
    )
}

export default Activities;