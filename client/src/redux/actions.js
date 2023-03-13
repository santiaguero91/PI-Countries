import axios from "axios";


export const GET_COUNTRIES = "GET_COUNTRIES"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME"


export function getCountries(){
    return async function(dispatch) {
        let json = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

export function filterCountriesByContinent(payload){
    console.log(payload);
    return{
        type: FILTER_BY_CONTINENT,
        payload
    }
} 

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}


export function searchCountryName(name){
    return async function(dispatch) {
            var json = await axios.get("http://localhost:3001/countries?name="+ name)
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: json.data 
            })
    }
}

    
