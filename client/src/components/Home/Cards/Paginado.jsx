import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux'
import Cards from './Cards';


export default function Paginado () {
    const dogs = useSelector((store) => store.allDogs)

    const [pag,setPag] = useState(0)
    const [numPag, setNumPag] = useState(0)

    let pagDogs = [...dogs].splice(pag,8)

    useEffect(() => {
        if(dogs.length == 0) return
        if(numPag > Math.trunc(dogs.length / 8)) {
            setPag(0)
        setNumPag(0)
        }
    })

    const nextHandler = () => {
        if(numPag < Math.ceil(dogs.length / 8) - 1) {
           setPag(pag + 8)
        setNumPag(numPag + 1) 
        }
        return
    }

    const prevHandler = () => {
        if(pag == 0) return
        setPag(pag - 8)
        setNumPag(numPag - 1)
    }

    return (
        <div className='cards_containter'>
            <Cards dogs={pagDogs}/>
            <div>
               <button className='btn_page' onClick={() => prevHandler()}>&#60;</button>
                <span className='num_page'>{numPag + 1}</span>
                <button className='btn_page' onClick={() => nextHandler()}>&#62;</button> 
            </div>
            
        </div>
    )
}