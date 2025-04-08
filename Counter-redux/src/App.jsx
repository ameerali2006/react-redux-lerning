import { useSelector ,useDispatch} from 'react-redux'


import './App.css'
import { increment,decrement,reset } from './store/counterSlice'

function App() {
  const count=useSelector((state)=>state.counter.count)
  const dispatch =useDispatch()
  return (
    <>
      count :{count}
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button><br />
    <button onClick={()=>dispatch(reset())}>reset</button>
    </>
  )
}

export default App
