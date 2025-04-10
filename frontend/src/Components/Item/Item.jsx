import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='Item'>      
        <Link to={`/product/${props.id}`}><img className='item-image' onClick={window.scrollTo(0, 0)} src={props.img} alt="" /></Link>              
        <p className='item-name'>{props.name}</p>
        <div className="item-prices">
            <div className="item-newprice">
                ${props.new_price}
            </div>
            <div className="item-old-price">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item