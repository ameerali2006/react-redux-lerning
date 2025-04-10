import { useState,useEffect } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './Redux/userSlice'

function App() {
  const {loading,error,users}=useSelector((state)=>state.user)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])

  return (
    <>
      <h3>Users</h3>
      {loading&&<h5>Loading.....</h5>}
      {error && <p>{error}</p>}
      <ul>{users.map((user)=>(<li>{user.name}-----{user.email}</li>))}</ul>
    </>
  )
}

export default App
