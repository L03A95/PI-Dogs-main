import './allCards.css'
import {Link} from 'react-router-dom'



export default function Card(props) {

    const treeTemps = (temperament) => {
        if(temperament.length > 3) {
            return (
                <div>
                    <p className='temperaments'>{temperament[0]}</p>
                    <p className='temperaments'>{temperament[1]}</p>
                    <p className='temperaments'>{temperament[2]}</p>  
                    <p className='temperaments'>...</p>  
                </div>
            )
        } else {
            return (
                <div>
                   {props.temperament?.map((t) => <p className='temperaments'>{t}</p>)} 
                </div>     
            )
        }
    }


    return (
        <div className="card">
            <Link to={`/detail/${props.id}`}>
                <p className="dog_name">{props.name}</p>
            </Link>
            <div>
                <img src={props.image} className='dog_img'/>
            </div>
                {
                    props.temperament ? treeTemps(props.temperament) : <div><p className='temperaments'>No temperaments...</p></div>
                }
            <div className='weight_container'> 
                <p className='weight min'>Min: {props.weight[0]}kg.</p> <p className='weight max'>Max: {props.weight[1]}kg.</p>
                <p className='weight_title'>Weight:</p>
            </div>     
        </div>
    )
}
