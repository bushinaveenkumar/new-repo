import React from 'react'
import './Breadcrumb.css'
const Breadcrumb = (props) => {
    const {product}=props;
  return (    
    <div className='Breadcrumbs-container'>
        <ul className="breadcrumb">
            <li><a href="#">SHOP</a></li>
            <li><a href="#">{product.category}</a></li>
            <li>{product.id}</li>            
        </ul>
    </div>
  )
}

export default Breadcrumb