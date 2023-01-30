import axios from 'axios'

export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const SEARCH_DOGS = 'SEARCH_DOGS';
export const FILTER_DOGS = 'FILTER_DOGS'
// export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
// export const POST_DOG = 'POST_DOG'




export const getDogs = () => async (dispatch) => {
      return await axios.get('http://localhost:3001/dogs')
      .then(r => dispatch({ type : GET_DOGS, payload : r.data}))
      .catch(e => console.error(e))
  };


export const getTemperaments = () => async (dispatch) => {
    return await axios.get('http://localhost:3001/temperaments')
    .then(r => dispatch({ type : GET_TEMPERAMENTS, payload : r.data}))
    .catch(e => console.error(e))
};


export const searchDogs = (name) => async (dispatch) => {
    return await axios.get(`http://localhost:3001/dogs?name=${name}`)
    .then(r => dispatch({ type : SEARCH_DOGS, payload : r.data}))
    .catch(e => console.error(e))
};

export const filterDogs = (filtered) => {
    return {type: FILTER_DOGS, payload: filtered}
}


// export const getDetail = async (id) => {
//     const result = await axios.get(`http://localhost:3001/dogs/${id}`)
//     return {type: GET_DOG_DETAIL, payload: result}
// }

// export const postDog = (dog) => async (dispatch) => {
//     axios.post('http://localhost:3001/dogs', {
//         name: dog.name,
//         height: dog.height,
//         weight: dog.weight,
//         lifetime: dog.lifetime,
//         image: dog.image,
//         temperament: dog.temperament
//     })
//     return {type: POST_DOG, payload: result}
// }