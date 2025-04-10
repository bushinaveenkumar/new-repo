import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = () => {
  const [new_collection, set_new_collection]=useState([]);
  
  useEffect(()=>{
    fetch("https://naveen-e-commerce-site-backend.onrender.com/newcollections").then((res)=>res.json()).then((data)=>set_new_collection(data))
  },[])

  console.log(new_collection)


  return (
    <div className='new-collections'>
        <h1 >New Collections</h1>
        <hr/>
        <div className='collections'>          
            {
                new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }            
        </div>
    </div>
  )
}

export default NewCollections