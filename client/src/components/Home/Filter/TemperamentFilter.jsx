import { useSelector, useDispatch } from 'react-redux'
import { filterDogs } from '../../../redux/actions'
import './Filter.css'



export default function TemperamentFilter () {
    const dispatch = useDispatch()

    const dogs = useSelector((store) => store.dogs)
    const temperaments = useSelector((store) => store.allTemperaments)

    const filteredDogs = [...dogs]
    const filteredTemperaments = [...temperaments]

    const filterTemps = (temp) => {
        let result = filteredDogs.filter((dog) => dog.temperament?.includes(temp))
        dispatch(filterDogs(result))
    }


    return (
        <div>
            <h4 className='filter_title'>Filter by temperament:</h4>
            {filteredTemperaments.map((t) => <button onClick={() => filterTemps(t.name)} className='temperaments_buttons'>{t.name}</button>)}
        </div>
    )
}