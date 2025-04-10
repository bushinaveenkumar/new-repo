import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import cart_item from '../../assets/cart_icon.png'
import list_product_icon from '../../assets/products_list_icon.png'

const Sidebar = () => {
  return (
    <div className='side-bar'>
        <Link to='/addproduct' style={{textDecoration:"none"}} >
          <div className="sidebar-item">
            <img src={cart_item} alt="" className="add-to-cart-img" />
            <p>Add product</p>
          </div>
        </Link>

        <Link to={'/listproducts'} style={{textDecoration:"none"}} >
          <div className="sidebar-item">
            <img src={list_product_icon} alt="" className="list-all-products-img" />   
            <p>Products list</p>         
          </div>
        </Link>
    </div>
  )
}

export default Sidebar