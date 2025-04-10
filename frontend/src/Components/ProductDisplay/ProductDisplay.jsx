import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/icons8-star-50.png'
import dull_star from '../Assets/icons8-star-26.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='ProductDisplay'>
        <div className="ProductDisplay-left">
            <div className="ProductDisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="ProductDisplay-img">
                <img className="ProductDisplay-main-img" src={product.image} alt=""/>
            </div>
        </div>

        <div className="ProductDisplay-right">
            <h1>{product.name}</h1>
            <div className="ProductDisplay-stars">
                <img className="full-star" src={star} alt="" />
                <img className="full-star" src={star} alt="" />
                <img className="full-star" src={star} alt="" />
                <img className="full-star" src={star} alt="" />
                <img className="dull-star" src={dull_star} alt="" />
            </div>
            
            
            <div className="price">
                {'Price'}
                <div className="productdisplay-right-prices">                
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>    
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>   
            </div>
            </div>

            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>                
            </div>  
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        </div>        
    </div>
  )
}

export default ProductDisplay