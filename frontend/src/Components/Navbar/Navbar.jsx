import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import cart_icon from '../Assets/cart_icon.png'
import shopper_logo from '../Assets/shopper-icon.jpg'

const Navbar = () => {
    const [menu, setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={shopper_logo} className='shopper-logo' alt='' />
            <h1>SHOPPER</h1>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("men")}> <Link style={{textDecoration:'none'}} to='/men'>Men</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("women")}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("kids")}> <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>  {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'> 
            {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace('/')}}>Log out</button>
            :<Link to='/login'><button>Login</button></Link>}            
            <img src="" alt=""/>
            <div className='cart-count'>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="items-count">{getTotalCartItems()}</div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar