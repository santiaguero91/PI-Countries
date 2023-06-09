/* import { GET_COUNTRIES, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRY_NAME, POST_ACTIVITY, GET_ACTIVITIES, GET_COUNTRY_ID} from "./actions";
 */

import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_SEASON, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRY_NAME, POST_ACTIVITY, GET_ACTIVITIES, DELETE_ACTIVITIES, GET_COUNTRY_ID, PUT_ACTIVITY} from "./action-types";
 

const initialState = {
    countries: [],
    allCountries:[],
    activities:[],
    allActivities:[],
    detail: [],
}

const rootReducer =(state=initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
          return {
              ...state, 
              countries: action.payload,
              allCountries: action.payload
        }
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            const continentFiltered = action.payload === "All"
            ? allCountries 
            : allCountries.filter(el => action.payload.includes(el.continent))
            return {
                ...state,
                countries: continentFiltered
        }
         case FILTER_BY_SEASON:
            const allActivities = state.allActivities
            const activityFiltered = action.payload === "All"
            ? allActivities 
            : allActivities.filter(el => el.season.includes(action.payload))
            return {
                ...state,
                activities: activityFiltered
        } 

        case ORDER_BY_NAME:
            let sortedArr = action.payload === "asc" ? 
            state.countries.sort(function (a, b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    } 
                    return 0;
            }) : 
            state.countries.sort(function (a, b) {
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1;
                } 
                return 0;
            })
            return{
                ...state,
                countries: sortedArr
        }
        case ORDER_BY_POPULATION:
                    let sortedArr2 = action.payload === "asc" ? 
                    state.countries.sort(function (a, b){
                        if(a.population > b.population){
                            return 1;
                        }
                        if(b.population > a.population){
                            return -1;
                        } 
                        return 0;
                    }) : 
                    state.countries.sort(function (a, b) {
                        if(a.population > b.population){
                            return -1;
                        }
                        if(b.population > a.population){
                            return 1;
                        } 
                        return 0;
                    })
                    return{
                        ...state,
                        countries: sortedArr2
        }
        case GET_COUNTRY_NAME:        
        return{
            ...state,
            countries: action.payload
        }
        case POST_ACTIVITY:
        return{
            ...state,
        }

        case PUT_ACTIVITY:
            return{
                ...state,
        }

        case DELETE_ACTIVITIES:
            return{
            ...state,
            activities: action.payload
        }
        
        case GET_ACTIVITIES:
        return{
            ...state,
            activities: action.payload,
            allActivities: action.payload
        }
        case GET_COUNTRY_ID:
            return{
                ...state,
                detail: action.payload
        }

        default:
            return{...state}; 
}

}
export default rootReducer;