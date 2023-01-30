// import {useState, useEffect} from 'react'
// import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import video from '../images/video.mp4'
import img from '../images/dogWikiLogo.png'
import './Start.css'


export default function Start() {
    return (
        <div className='wrapper'>
            <div className='div_logo'>
                <img src={img} className='img'/>
                <h1 className='title'>Wiki Dog</h1>
            </div>
            <p className='text'>Welcome to Wiki Dog! This is a web page where you can find your ideal dog race!</p>
            <Link to='/home'><button className='custom-btn btn-2'>HOME</button></Link>

            <video muted autoPlay loop ><source src={video} type='video/mp4'/></video>
            <div className='overlay'></div>
        </div>
    )
}