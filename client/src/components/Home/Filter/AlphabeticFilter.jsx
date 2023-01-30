import { useSelector, useDispatch } from 'react-redux'
import { filterDogs } from '../../../redux/actions'
import './Filter.css'





export default function AlphabeticFilter () {
    const dispatch = useDispatch()

    const dogs = useSelector((store) => store.allDogs)

    const filterArr = [...dogs]

    const filterByAsc = () => {
        const resul = filterArr.sort((a,b) => {
            if(a.name < b.name) return -1
            if(a.name > b.name) return 1
            return 0
        })
        dispatch(filterDogs(resul))
    }

    const filterByDesc = () => {
        const resul = filterArr.sort((a,b) => {
            if(a.name < b.name) return -1
            if(a.name > b.name) return 1
            return 0
        }).reverse()
        dispatch(filterDogs(resul))
    }



    return (
        <div>
            <h4 className='filter_title'>Alphabetic Filter:</h4>
            <button onClick={() => filterByAsc()} className='filter_buttons'>Ascendant</button>
            <button onClick={() => filterByDesc()} className='filter_buttons'>Descendant</button>
        </div>
    )
}