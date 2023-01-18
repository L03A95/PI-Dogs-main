export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const SEARCH_DOGS = 'SEARCH_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const POST_DOG = 'POST_DOG'

export const getDogs = () => {
    return {type: GET_DOGS, payload: null}
}

export const getTemperaments = () => {
    return {type: GET_TEMPERAMENTS, payload: null}
}

export const searchDogs = (name) => {
    return {type: SEARCH_DOGS, payload: null}
}

export const getDetail = (id) => {
    return {type: GET_DOG_DETAIL, payload: null}
}

export const postDog = (dog) => {
    return {type: POST_DOG, payload: null}
}