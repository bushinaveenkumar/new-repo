import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart}=useContext(ShopContext)
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        <div>
            {
                all_products.map((e,i)=>{                    
                    if (cartItems[e.id]>0){
                        return <div>
                            <div className="cartitems-format-main cartitems-format">
                                    <img src={e.image} alt='' className='cartitems-cartitemimg' />
                                    <p>{e.name}</p>
                                    <p>{e.new_price}</p>
                                    <button className='quantity-btn'>{cartItems[e.id]}</button>
                                    <p>{(e.new_price)*(cartItems[e.id])}</p>
                                    <img onClick={()=>removeFromCart(e.id)} className='cartitems-removeimg' src={remove_icon} alt='remove_icon' />                                                    
                            </div>
                                <hr/>
                                </div>                                
                    }    
                    return null;               
                })
            }
            
        </div>

        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>Total</h1>
            
            <div className="cartitem-total-item">
                <p>subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cartitem-total-item">
                <p>Shopping Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className="cartitem-total-item">
                <p>Total</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
            <p>If you have promocode, please enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartItems