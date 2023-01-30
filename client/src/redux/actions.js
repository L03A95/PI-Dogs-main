import axios from 'axios'

export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const SEARCH_DOGS = 'SEARCH_DOGS';
export const FILTER_DOGS = 'FILTER_DOGS'


export const getDogs = () => async (dispatch) => {
      return await axios.get('https://pi-dogs-main-production-f939.up.railway.app/dogs')
      .then(r => dispatch({ type : GET_DOGS, payload : r.data}))
      .catch(e => console.error(e))
  };


export const getTemperaments = () => async (dispatch) => {
    return await axios.get('https://pi-dogs-main-production-f939.up.railway.app/temperaments')
    .then(r => dispatch({ type : GET_TEMPERAMENTS, payload : r.data}))
    .catch(e => console.error(e))
};


export const searchDogs = (name) => async (dispatch) => {
    return await axios.get(`https://pi-dogs-main-production-f939.up.railway.app/dogs?name=${name}`)
    .then(r => dispatch({ type : SEARCH_DOGS, payload : r.data}))
    .catch(e => console.error(e))
};

export const filterDogs = (filtered) => {
    return {type: FILTER_DOGS, payload: filtered}
}
