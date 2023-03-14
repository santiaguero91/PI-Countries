import { GET_COUNTRIES, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRY_NAME, POST_ACTIVITY, GET_ACTIVITIES, GET_COUNTRY_ID} from "./actions";


const initialState = {
    countries: [],
    allCountries:[],
    activities:[],
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
            : allCountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                countries: continentFiltered
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

        case GET_ACTIVITIES:
        return{
            ...state,
            activities: action.payload
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