import React from 'react'
import './Hero.css'
import arrow from '../Assets/arrow_icon.jpg'
import hero_image from "../Assets/Hero_image.jpg"
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <p>new collections</p>
            <p>for every one</p>
            <div >
              <button className='hero-latest-button'>Latest collection</button>
              <img src={''} alt=''/>
            </div>
        </div> 
        <div className="hero-right">
          <img className="hero-img" src={hero_image} alt=""/>
        </div>
    </div> 
  )
}

export default Hero