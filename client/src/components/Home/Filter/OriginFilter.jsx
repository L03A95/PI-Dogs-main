import { useSelector, useDispatch } from 'react-redux'
import { filterDogs } from '../../../redux/actions'
import './Filter.css'



export default function OriginFilter () {
    const dispatch = useDispatch()

    const dogs = useSelector((store) => store.dogs)

    const filteredDogs = [...dogs]

    const apiDogs = () => {
        let resulDogs = filteredDogs.filter((dog) => dog.origin == 'API')
        dispatch(filterDogs(resulDogs))
    }

    const bddDogs = () => {
        let resulDogs = filteredDogs.filter((dog) => dog.origin == 'BDD')
        dispatch(filterDogs(resulDogs))
    }


    return (
        <div>
            <h4 className='filter_title'>Filter by origin:</h4>
            <button onClick={() => apiDogs()} className='filter_buttons'>API</button>
            <button onClick={() => bddDogs()} className='filter_buttons'>DB</button>
        </div>
    )
}