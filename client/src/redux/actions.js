import axios from "axios";

 import { GET_COUNTRIES, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRY_NAME, GET_ACTIVITIES, GET_COUNTRY_ID} from "./action-types";
 

export function getCountries(){
    return async function(dispatch) {
        try {
        let json = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    } catch (error){
        console.log(error);
    }
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
        try{
        var json = await axios.get("http://localhost:3001/countries?name="+ name)
        return dispatch({
            type: GET_COUNTRY_NAME,
            payload: json.data 
        }) 
    }catch (error){
        console.log(error);
    }
    }
}

export function getActivities(){
    return async function(dispatch) {
        try{
            var json = await axios.get("http://localhost:3001/activities")
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data 
            })
        } catch (error){
            console.log(error);
        }
        console.log(json.data);
    }
}    

export function postActivities(payload){
    return async function() {
        try{       
        const response = await axios.post("http://localhost:3001/activities", payload)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 

export function deleteActivities(id){
    return async function() {
        try{       
        const response = await axios.delete("http://localhost:3001/activities/"+id)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 




export function getDetail(id){
    return async function(dispatch) {
        try{
            var json = await axios.get("http://localhost:3001/countries/"+ id)
            return dispatch({
                type: GET_COUNTRY_ID,
                payload: json.data 
            })
        } catch (error){
            console.log(error);
        }
    }
}