import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/Header.css"
import Logo from '../Images/logo.jpeg'
import { Context } from './Contex'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {active,setActive}=useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate =()=>{
    navigate("/specialofferonlypage")
  }

  const handleNavigate2 =()=>{
    navigate("/trainingonlypage")
  }

  return (
    <div className='HeaderWrap'>
      <div className='HiddenSpots'>
        <p onClick={handleNavigate}>-</p>
        <p onClick={handleNavigate2}>-</p>
      </div>
      <div className='Header'>
      
        <div className='HeaderLeft'>
          <img src={Logo} alt="logo"/>
        </div>
        <div className='HeaderRight'>
          <NavLink to={"/"} className={location.pathname==="/"?"HeaderRightActive":""} onClick={()=>setActive("Home")}>Home</NavLink>
          <NavLink to={"/aboutus"} className={location.pathname==="/aboutus"?"HeaderRightActive":""} onClick={()=>setActive("About")}>About us</NavLink>
          <NavLink to={"/contactus"} className={location.pathname==="/contactus"?"HeaderRightActive":""} onClick={()=>setActive("Contact")}>Contact us</NavLink>
        
        </div>
        
      </div>
    </div>
  )
}

export default Header
