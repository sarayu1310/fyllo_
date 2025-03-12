import React from 'react'
import videoBg from "../../assets/videoBg.mp4"
import "./Header.css"

const Header = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <p>Next Gen Agri Intelligence Platform</p>
            <h1>Data Backed Agriculture Solutions.</h1>
        </div>
    </div>
  )
}

export default Header
