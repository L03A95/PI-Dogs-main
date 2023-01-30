import { useSelector, useDispatch } from 'react-redux'
import { filterDogs } from '../../../redux/actions'
import './Filter.css'



export default function WeightFilter () {
    const dispatch = useDispatch()
    
    const dogs = useSelector((store) => store.allDogs)

    const filterArr = [...dogs]

    const filterByMin = () => {
        let resulDogs = filterArr.sort((a,b) => {
            return a.weight[0] - b.weight[0]
        })
        dispatch(filterDogs(resulDogs))
    }

    const filterByMax = () => {
        let resulDogs = filterArr.sort((a,b) => {
            return b.weight[1] - a.weight[1]
        }) 
        dispatch(filterDogs(resulDogs))
    }

    return (
        <div>
            <h4 className='filter_title'>Filter by weight:</h4>
            <button onClick={() => filterByMin()} className='filter_buttons'>Min</button>
            <button onClick={() => filterByMax()} className='filter_buttons'>Max</button>
            <br/>
        </div>
    )
}