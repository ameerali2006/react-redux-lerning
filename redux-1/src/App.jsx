import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement,reset } from './store'

function App() {
  const count=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  return (
    <>
    {count}
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(reset())}>@</button>
      
    </>
  )
}

export default App
