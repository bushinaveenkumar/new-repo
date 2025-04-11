import React, { useEffect } from 'react'
import  { useState } from "react";

import './ListProducts.css'

const ListProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      oldPrice: "$100",
      newPrice: "$80",
      category: "men",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      title: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      oldPrice: "$100",
      newPrice: "$80",
      category: "men",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      title: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      oldPrice: "$100",
      newPrice: "$80",
      category: "men",
    },
  ]);

  const removeProduct = async (id) =>{
    await fetch('https://naveen-e-commerce-site-backend.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })

    await fetchInfo()
  }
  const fetchInfo=async ()=>{
    await fetch('https://naveen-e-commerce-site-backend.onrender.com/allproducts').then((res)=>res.json()).then((data)=>{setProducts(data)})
  }

  useEffect(()=>{
    fetchInfo()
  },[])

  console.log(products)

  return (
    <div className="container">
      <h2 className="title">All Products List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt="Product" className="product-img" /></td>
              <td>{product.name}</td>
              <td>{product.old_price}</td>
              <td>{product.new_price}</td>
              <td>{product.category}</td>
              <td>
                <button className="remove-btn" onClick={() => removeProduct(product.id)}>
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProducts