import { FILTER_DOGS, GET_DOGS, GET_TEMPERAMENTS, SEARCH_DOGS } from "./actions";



const initialState = {
    dogs:[],
    allDogs: [],
    allTemperaments: [],
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {...state,
                allDogs: action.payload,
                dogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {...state,
                allTemperaments: action.payload
            }
        case SEARCH_DOGS:
            return {...state,
                allDogs: action.payload
            }
        case FILTER_DOGS:
            return {...state,
                allDogs: action.payload
            }
        default:
            return {...state};
    }


}

export default reducer;