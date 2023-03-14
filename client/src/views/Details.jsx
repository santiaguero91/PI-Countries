import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {getDetail} from "../redux/actions"
import style from "../styles/Details.module.css"



const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getDetail(id))
    },[dispatch, id])

    const country = useSelector((state)=> state.detail)

    return(
        <div>
            <button >
            <Link to='/home'>Back to Home</Link>
            </button>
            {
                country.length > 0 ? 
                <div>
                    <h1>{country[0].name}</h1>
                    <h1>{country[0].population}</h1>
                    <h1>{country[0].capital}</h1>
                    <h1>{country[0].continent}</h1>
                    <img className={style.imgFlag} alt="imgFlag" src={country[0].imgFlag}/>
                </div> : <p>LOADING...</p>
            } 

        </div> 

    )


}
export default Details;