import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/productSlice'

import './AddProduct.css'
import { setTheme } from '../store/themeSlice'
const AddProduct = () => {
    const mode=useSelector((state)=>state.theme.mode)
  
    const [name,setName]=useState('')
    const [category,setCategory]=useState('')
    const [error,setError] =useState({fin:false,sin:false})
    const dispatch=useDispatch()
    const handleAdd=()=>{
       const newError={
        fin:name.trim()=='',
        sin:category.trim()==''
       }
       setError(newError)
       if(!newError.fin&& !newError.sin){
        dispatch(addProduct({id:Date.now(),name,category}))
        setName('')
        setCategory('')

       }
    }
  return (
    <div className={mode=='light'?"add-product-container theme-light" :"add-product-container theme-dark"}>
      <button onClick={()=>dispatch(setTheme())}>change theme</button>
      <h3 className="heading">Add Product</h3>

      <input
        className="input"
        type="text"
        placeholder="Enter product name"
        onChange={(e) => {
          setName(e.target.value)
          setError({ ...error, fin: false })
        }}
        value={name}
      />
      {error.fin && <span className="error">* Enter product name</span>}

      <input
        className="input"
        type="text"
        placeholder="Enter product category"
        onChange={(e) => {
          setCategory(e.target.value)
          setError({ ...error, sin: false })
        }}
        value={category}
      />
      {error.sin && <span className="error">* Enter product category</span>}

      <button className="btn" onClick={handleAdd}>
        Add Product
      </button>
    </div>
  )
}

export default AddProduct
