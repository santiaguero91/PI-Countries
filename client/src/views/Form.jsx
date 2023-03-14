import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {getCountries, postActivities} from "../redux/actions"
import style from "../styles/Form.module.css"






const Form = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
            
        })
    }

    const handleCheck = (e) => {
        if(e.target.checked){
            setInput({
                ...input,
                status: e.target.value
            })
            console.log(input);
        }
    }

     const handleSelect = (e) => {
          setInput({
            ...input,
            countries: [...input.countries,e.target.value]
        })  
    }

     const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postActivities(input));
        alert("Activity was created successfully!!")
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            country: [],
        })
        navigate('/home')
    } 


    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);



    return (
      <div className={style.background}>
        <Link  to= "/home" ><button>Back to HOME</button></Link>
        <form className={style.form}>
        <h1>Create New Activity</h1>
            <div>
                <label>Activity Name:</label>
                <input 
                type="text"
                value={input.name}
                name="name"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>Difficulty:</label>
                <input 
                type="text"
                value={input.difficulty}
                name="difficulty"
                onChange={(e)=>handleChange(e)}
            />
            </div>
            <div>
                <label>Duration:</label>
                <input 
                type="text"
                value={input.duration}
                name="duration"
                onChange={(e)=>handleChange(e)}
            />
            </div>

            <div>
                <label>Season:</label>
                <label><input
                    type="checkbox"
                    name="Summer"
                    value="Summer"
                    onChange={(e)=>handleCheck(e)}
                /> Summer</label>
                <label><input
                    type="checkbox"
                    name="Autumn"
                    value="Autumn"
                    onChange={(e)=>handleCheck(e)}
                />Autumn</label>
                <label><input
                    type="checkbox"
                    name="Winter"
                    value="Winter"
                    onChange={(e)=>handleCheck(e)}
                />Winter</label>
                <label><input
                    type="checkbox"
                    name="Spring"
                    value="Spring"
                    onChange={(e)=>handleCheck(e)}
                />Spring</label>
            </div>

            <select onChange={(e)=>handleSelect(e)}>
                
                {
                allCountries.map((country)=>(
                <option value={country.name} key={country.id}> {country.name} </option>
                ))
                } 
            </select>
             {/* <ul><li>{input.allCountries.map(el=>el+" ")}</li></ul>   */}
            
            <div>
             <button onClick={(e)=>handleSubmit(e)} type= "submit">CREATE ACTIVITY</button>
            </div>



        </form>


      </div>
    )
}
export default Form;