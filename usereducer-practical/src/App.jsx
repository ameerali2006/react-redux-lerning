import React, {useReducer} from "react"

function App() {
  const initial={count:0}
  const redeucer=(state,action)=>{
    switch (action.type){
      case 'increment':
        return {count:state.count+1}
      case 'decrement':
        return {count:state.count-1}
      case 'reset':
        return initial
      default:
        return state
    }

  }
  const [state,dispatch] = useReducer(redeucer,initial)
  return (
    <>
      {state.count}
      <button onClick={()=>dispatch({type:'increment'})}>+</button><br />
      <button onClick={()=>dispatch({type:'decrement'})}>-</button><br />
      <button onClick={()=>dispatch({type:'reset'})}>@</button><br />
    </>
  )
}

export default App
