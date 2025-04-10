import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo_big.png'
import profile from '../../assets/profile.png'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className='logo-container'>
          <img src={navlogo} alt="" className="nav-logo"/> 
          <h1 className='site-name'>SHOPPER <span className='admin-span'>Admin</span></h1>   
        </div> 
        <img src={profile} alt="" className="profile-icon" />     
    </div>
  )
}

export default Navbar