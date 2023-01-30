import Paginado from './Cards/Paginado'
import Filter from './Filter/Filter'
import './Home.css'


export default function Home() {
    return (
        <div className='all_wrapper'>
            <Filter/>
            <Paginado/>
        </div>
    )
}