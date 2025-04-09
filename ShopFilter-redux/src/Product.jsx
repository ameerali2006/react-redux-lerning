import React,{useState} from 'react'
import AddProduct from './AddProduct/AddProduct'
import { useSelector } from 'react-redux'
import './Product.css'
const Product = () => {
  const [addprot,setAddPro] =useState(false)
  const product=useSelector((state)=>state.product.items)
  const mode=useSelector((state)=>state.theme.mode)
  return (
    <div className={mode=='light'?"product-container theme-light":"product-container theme-dark"}>
    <h3 className="heading">Product List</h3>
    {product.length > 0 ? (
      <ul className="product-list">
        {product.map((p) => (
          <li key={p.id} className="product-item">
            <span>Name: <strong>{p.name}</strong></span><br />
            <span>Category: <strong>{p.category}</strong></span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="empty">No products available</p>
    )}

    {!addprot ? (
      <button className="black-btn" onClick={() => setAddPro(true)}>Add Product</button>
    ) : (
      <>
        <AddProduct />
        <button className="black-btn" onClick={() => setAddPro(false)}>Done</button>
      </>
    )}
  </div>
  )
}

export default Product
