import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import {searchCountryName} from "../redux/actions"
import style from "../styles/SearchBar.module.css"


export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

function handleInputChange(e) {
    e.preventDefault()
    setName(e.target.value)
    setCurrentPage(1)
}

function handleSubmit(event) {
    event.preventDefault()
    dispatch(searchCountryName(name))
}

return (
    <div>
        <input 
        className={style.input}
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
        />
        <button 
        className={style.button}
        type="submit" 
        onClick={(event) => handleSubmit(event)} >
        Search</button>

    </div>
)

}