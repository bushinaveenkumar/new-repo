import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Assets/Breadcrumbs/Breadcrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {  
  const {all_products}=useContext(ShopContext)
  const {productId}=useParams()
  const product =all_products.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts />
    </div>
  )
}

export default Product