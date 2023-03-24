import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {getCountries, putActivities} from "../redux/actions"
import style from "../styles/Form.module.css"
import validate from "./FormValidation";






const ModifyActivity = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        country: [],
        img: "",
    })

    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        country: [], 
        img: "",  
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
    dispatch(putActivities(input));
   
       
    setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        country: [],
        img: "",
    })

    alert("Activity was modify!!")  
    navigate('/activities')    
} 

     useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch]);



    return (
      <div className={style.background}>
        <Link  to= "/activities" ><button>Back to Activities</button></Link>
        <form className={style.form}>
        <h1>Modify Activity</h1>
            <div>
                <label>Activity to modify:</label>
                <input 
                id="inputname"
                placeholder="Name"
                type="text"
                value={input.name}
                name="name"
                onChange={(e)=>handleChange(e)}
            />
            {errors.name && <p className={style.alert} >{errors.name}</p>}

            </div>

<hr></hr>

            <div>
                <label>New Difficulty:</label>
                <input 
                type="number"
                value={input.difficulty}
                name="difficulty"
                placeholder="1 to 5"
                onChange={(e)=>handleChange(e)}
                min="1" max="5"
            />
            {errors.difficulty && <p className={style.alert} >{errors.difficulty}</p>}
            </div>
            <div>
                <label>New Duration:</label>
                <input 
                placeholder="Select hours"
                type="number"
                value={input.duration}
                name="duration"
                onChange={(e)=>handleChange(e)}
                min="1" max="72"
            />
            {errors.duration && <p className={style.alert} >{errors.duration}</p>}
            </div>
            <div className={style.selectCountries}>Select New Countries:</div>

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

                <div>
                <label>Select Season:</label>
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
            <div>
                <label>Agregar Imagen:</label>
                <input 
                id="inputimg"
                type="text"
                value={input.img}
                name="img"
                onChange={(e)=>handleChange(e)}
                title="img"
            />
            </div>
            <div>
                {
                    (input.name !== "" && input.difficulty !== "" && input.duration !== "" && input.season.length !== 0 && input.country.length !== 0) ? 
                 <button id="submitButton"   onClick={(e)=>handleSubmit(e)}  type= "submit">MODIFY ACTIVITY</button> :
                 <button id="submitButton" disabled  onClick={(e)=>handleSubmit(e)}  type= "submit">MODIFY ACTIVITY</button>
                }
            </div>

        </form>


      </div>
    )
}
export default ModifyActivity;