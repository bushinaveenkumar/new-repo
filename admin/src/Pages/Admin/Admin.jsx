import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ListProducts from '../../Components/ListProducts/ListProducts'
import AddProduct from '../../Components/AddProduct/AddProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>

      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproducts' element={<ListProducts/>}/>
      </Routes>

    </div>
  )
}

export default Admin