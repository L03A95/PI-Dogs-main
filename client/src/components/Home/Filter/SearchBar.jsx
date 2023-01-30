import { useDispatch } from 'react-redux'
import { searchDogs } from '../../../redux/actions'
import { useState } from 'react'
import './Filter.css'




export default function SearchBar () {
    const [inputDog, setInputDog] = useState('')

    const dispatch = useDispatch()

    const searchDog = (value) => {
        dispatch(searchDogs(value))
    }

    const handleInputChange = ({target}) => {
        setInputDog(target.value)
     }

    return (
        <div>
            <input value={inputDog} onChange={handleInputChange} placeholder='Search breeds' className='search_bar'/>
            <button onClick={() => searchDog(inputDog)} className='filter_buttons'>Search</button>
        </div>
    )
}



