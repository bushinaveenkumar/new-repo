import React, { useContext } from 'react'
import Item from '../Components/Item/Item'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drapdown_img from '../Components/Assets/drapdown_img.png'

const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  return (
    <div className='Shop-Category'>
        <div className="shopcategory-indexsort">
          <p><span>Showing 1-12</span> of 36 products</p>
          <div className="shopcategory-sort">
              Sort by <img src={drapdown_img} alt=""/>
        </div>
        </div>        
        
        <div className="shopcategory-products">          
            {
              all_products.map((item,i)=>{
                if (item.category===props.category){                
                  return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else 
                  return null;
              })  
            }  

            <div className="shopcategory-loadmore">
          explore more
        </div>      
        </div>

        
    </div>
  )
}

export default ShopCategory