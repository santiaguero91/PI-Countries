import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {getActivities, postPokemon} from "../redux/actions"






const Form = () => {
    const dispatch = useDispatch()
    const types = useSelector((state)=> state.types)
    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: "",
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
            
        })
    }




    useEffect(()=>{
        dispatch(getActivities())
    }, [dispatch]);



    return (
      <div>
        <Link  to= "/home" ><button>VOLVER a HOME</button></Link>
        <h1>Create New Activity</h1>
        <form>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                value={input.name}
                name="name"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>HEALTH:</label>
                <input 
                type="text"
                value={input.health}
                name="health"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>ATTACK:</label>
                <input 
                type="text"
                value={input.attack}
                name="attack"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>DEFENSE:</label>
                <input 
                type="text"
                value={input.defense}
                name="defense"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>AGILITY:</label>
                <input 
                type="text"
                value={input.agility}
                name="agility"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>HEIGHT:</label>
                <input 
                type="text"
                value={input.height}
                name="height"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>WEIGHT:</label>
                <input 
                type="text" 
                value={input.weight}
                name="weight"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>IMAGEN:</label>
                <input 
                type="text"
                value={input.img}
                name="img"
                onChange={(e)=>handleChange(e)}
            />
            </div>
        </form>


      </div>
    )
}
export default Form;