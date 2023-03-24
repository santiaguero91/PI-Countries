import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {getCountries, postActivities} from "../redux/actions"
import style from "../styles/Form.module.css"
import validate from "./FormValidation";






const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        country: [],
    })

    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        country: [],   
    })


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleCheck = (e) => {
        if(e.target.checked){
            setInput({
                ...input,
                season: [...input.season,e.target.value]
            }) 
        }

    }

     const handleSelect = (e) => {
          setInput({
            ...input,
            country: [...input.country,e.target.value]
        }) 
    }


const handleSubmit = (e) => {
     e.preventDefault() 
     console.log(input);
    dispatch(postActivities(input));
   
       
    setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        country: [],
    })

     navigate('/activities')    
     alert("Activity was created successfully!!")  
} 
     useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);



    return (
      <div className={style.background}>
        <Link  to= "/activities" ><button>Back to Activities</button></Link>
        <form className={style.form}>
        <h1>Create New Activity</h1>
            <div>
                <label>Activity Name:</label>
                <input 
                id="inputname"
                type="text"
                value={input.name}
                name="name"
                onChange={(e)=>handleChange(e)}
                title="name"
            />
            {errors.name && <p className={style.alert} >{errors.name}</p>}

            </div>
            <div>
                <label>Difficulty:</label>
                <input 
                type="number"
                value={input.difficulty}
                name="difficulty"
                onChange={(e)=>handleChange(e)}
                title="difficulty"
            />
            {errors.difficulty && <p className={style.alert} >{errors.difficulty}</p>}
            </div>
            <div>
                <label>Duration:</label>
                <input 
                type="number"
                value={input.duration}
                name="duration"
                onChange={(e)=>handleChange(e)}
                title="duration"
            />
            {errors.duration && <p className={style.alert} >{errors.duration}</p>}
            </div>
            <div className={style.selectCountries}>Select Countries:</div>

            <select onChange={(e)=>handleSelect(e)}>                
                {
                    countries.map((country)=>(
                        <option value={country.name} key={country.id}> {country.name} </option>
                        ))
                    } 

            
            </select>
            {input.country.length === 0 && <p className={style.alert} >{errors.country}</p>}

               <div className={style.divblance}>
                <h4>Paises Seleccionados</h4>
                <ul><li>{input.country.map(el=>el+"  , ")}</li></ul> </div>
            

                <div className="SeasonCheckboxs">
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
            {input.season.length === 0 && <p className={style.alert} >{errors.season}</p>}
            </div>

            <div className="divSubmitButton">
                {
                    (input.name !== "" && input.difficulty !== "" && input.duration !== "" && input.season.length !== 0 && input.country.length !== 0)? 
                 <button id="submitButton"   onClick={(e)=>handleSubmit(e)}  type= "submit">CREATE ACTIVITY</button> :
                 <button id="submitButton"  disabled onClick={(e)=>handleSubmit(e)}  type= "submit">CREATE ACTIVITY</button>             
                }
            </div> 

        </form>


      </div>
    )
}
export default Form;