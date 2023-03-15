import React,{ useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getCountries, filterCountriesByContinent, orderByName, orderByPopulation} from "../redux/actions"
import  {Link} from "react-router-dom"
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar"
import style from "../styles/Home.module.css"



const Landing = () => {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries)


/////* PAGINATION  *//////
const [currentPage, setCurrentPage] = useState(1);  
// eslint-disable-next-line
const [countriesPerPage, setCountriesPerPage] = useState(10);
/* eslint-disable jsx-a11y/anchor-is-valid */ 
// eslint-disable-next-line
const [orden, setOrden] = useState("");  
const indexOfLastCountry = currentPage * countriesPerPage
const indexOfFirstCountry=  indexOfLastCountry - countriesPerPage
const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
}

const handleNext = (pageNumber)=> {
  setCurrentPage(pageNumber + 1)
 }



  ///////////////////handlers/////////////////////////////////

  function handleFilterContinent(event){
    dispatch(filterCountriesByContinent(event.target.value))
    setCurrentPage(1);
   }

   function handleOrderByName(event){
    event.preventDefault()
    dispatch(orderByName(event.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`)
   }

   function handleOrderByPopulation(event){
    event.preventDefault()
    dispatch(orderByPopulation(event.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`)
   }

//////////////////////////////

  useEffect(()=>{
    dispatch(getCountries())
},[dispatch])

function handleClick(event){
  event.preventDefault()
  dispatch(getCountries());
}

  return (
  <div className={style.background}>

  <div className={style.linkAndReload} >
        <button className={style.linkToForm}>
        <Link to='/form' >CREAR Actividad</Link>
        </button>
        <button className={style.linkToForm}>
        <Link to='/activities' >Go to Activities</Link>
        </button>
        <SearchBar 
        className={style.searchBar}
        setCurrentPage={setCurrentPage}
        />
        <button onClick={e=>{handleClick(e)}}>
            Volver a cargar todos los paises
        </button>
  </div>

  <div className={style.filters}>
        <select onChange={e=> handleOrderByName(e)} >
          <option
          value="asc"
          >A-Z</option>
          <option
          value="desc"
          >Z-A</option>
        </select>

      <select onChange={e=> handleOrderByPopulation(e)}>
      <option
          >Order by population</option>
      <option
          value="asc"
          >Population increase</option>
          <option
          value="desc"
          >Population decrease</option>
      </select>

        <select onChange={e=> handleFilterContinent(e)}
        >
          <option
          value="All"
          >All Continents</option>
          <option
          value="South America"
          >South America</option>
          <option
          value="North America"
          >North America</option>
          <option
          value="Asia"
          >Asia</option>
          <option
          value="Europe"
          >Europe</option>
          <option
          value="Africa"
          >Africa</option>
          <option
          value="Oceania"
          >Oceania</option>
          <option
          value="Antarctica"
          >Antarctica</option>

        </select>
  </div>


  <Pagination
  countriesPerPage = {countriesPerPage}
  allCountries ={allCountries.length}
  pagination = {pagination}
  currentPage={currentPage}
  handleNext={handleNext}
  setCurrentPage={setCurrentPage}
  />
        
  <div className={style.countries}>
{
  currentCountries.map( el=>{
    return <Card
    key={el.id}
    name={el.name}
    imgFlag={el.imgFlag}
    id={el.id}   
    population={el.population}
    capital={el.capital}
    continent={el.continent}
    area={el.area}
    subregion={el.subregion}
    activities={el.activities}
    />
  })}
  </div>



</div>
)
}
export default Landing;