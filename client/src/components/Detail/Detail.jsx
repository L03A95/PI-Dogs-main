import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './Detail.css'


export default function Detail() {
    const {detailId} = useParams()
    const [dogDetail,setDogDetail] = useState({
        name: '',
        weight: ['',''],
        height:['',''],
        lifetime:['',''],
        image:'',
        temperament:[]
    })

    useEffect(() => {
        fetch(`https://pi-dogs-main-wheat-five.vercel.app/dogs/${detailId}`)
           .then((response) => response.json())
           .then((dog) => {
              if (dog.name) {
                 setDogDetail(dog);
              } else {
                 window.alert("The solicited dog id's dosen't exist");
              }
           })
           .catch((err) => {
              window.alert(err.message);
           });
        return setDogDetail({
        name: '',
        weight: ['',''],
        height:['',''],
        lifetime:['',''],
        image:'',
        temperament:[]
    });
     }, [detailId]);

    return (
        <div className='detail_wrapper'>
            <div className='detail_container'>
                <div>
                    <div className='info_wrappers'>
                        <h4 className='info_titles'>Weight:</h4>
                        <p className='info_numbers min'>Min: {dogDetail.weight[0]}kg.</p><p className='info_numbers max'>Max: {dogDetail.weight[1]}kg.</p>
                    </div>
                    <div className='info_wrappers'>
                        <h4 className='info_titles'>Height:</h4>
                        <p className='info_numbers min'>Min: {dogDetail.height[0]}cm.</p><p className='info_numbers max'>Max: {dogDetail.height[1]}cm.</p>
                    </div>
                    <div className='info_wrappers'>
                        <h4 className='info_titles'>Lifespan:</h4>
                        <p className='info_numbers min'>Min: {dogDetail.lifetime[0]}yr.</p><p className='info_numbers max'>Max: {dogDetail.lifetime[1]}yr.</p>
                    </div>
                </div>
                <div className='temperaments_wrapper'>
                    <h4 className='info_titles'>Temperaments:</h4>
                    {dogDetail.temperament ? dogDetail.temperament.map((t) => <p className='temperament_display'>{t}</p>) : <p>Unknown</p>}
                </div>
                <div>
                    <h1 className='dog_name_info'>{dogDetail?.name}</h1>
                    <img src={dogDetail?.image} className='detail_img'/>   
                </div>
            </div>
        </div>
    )
}