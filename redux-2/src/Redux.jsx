import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
const Redux = () => {
    const name=useSelector((state)=>state.name.name)
    console.log(name)
  return (
    <div>
      <h1>hello,{name}</h1>
    </div>
  )
}

export default Redux
