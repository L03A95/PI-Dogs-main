// import {useState, useEffect} from 'react'
// import {useParams} from 'react-router-dom'

import { Link } from "react-router-dom";
import './Nav.css'
import logo from '../../images/dogWikiLogo.png'
import postLogo from '../../images/postDog.png'



export default function Nav() {
    return (
        <div className="nav">
            <Link to='/home' className="logo_wrapper">
                <img src={logo} alt="logo" className="img_logo"/>
                <h1 className="nav_text">Wiki Dog</h1>
            </Link>
            <Link to='/post' className="logo_wrapper">
                <img src={postLogo} alt="post_logo" className="img_logo"/>
                <h2 className="nav_text">Post dog</h2>
            </Link>
        </div>
    )
}