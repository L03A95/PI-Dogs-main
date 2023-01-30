import AlphabeticFilter from './AlphabeticFilter'
import './Filter.css'
import SearchBar from './SearchBar'
import WeightFilter from './WeightFilter'
import OriginFilter from './OriginFilter'
import TemperamentFilter from './TemperamentFilter'



export default function Filter () {
    

    return (
        <div className="filter_container">
            <h2 className='filter_title'>Filter:</h2>
            <SearchBar/>
            <WeightFilter/>
            <AlphabeticFilter/>
            <OriginFilter/>
            <TemperamentFilter/>
        </div>
    )
}