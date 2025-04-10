import React from 'react'
import './Offers.css'
import exclusive_offers from '../Assets/offers.jpg'
const Offers = () => {
  return (
    <div className="Offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <p>Only on selected</p>
            <button>Check</button>
        </div>
        <div className="offers-right">
           <img src={exclusive_offers} alt=''/>
        </div>

    </div>
  )
}

export default Offers