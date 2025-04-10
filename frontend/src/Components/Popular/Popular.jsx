import React, {useState, useEffect}from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {

  const [popular_in_women, set_popular_in_women]=useState([]);
    
    useEffect(()=>{
      fetch("https://naveen-e-commerce-site-backend.onrender.com/popularinwomen").then((res)=>res.json()).then((data)=>set_popular_in_women(data))
    },[])

  return (
    <div className='popular'>
        <h1 >POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular_item">
        {popular_in_women.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}

export default Popular