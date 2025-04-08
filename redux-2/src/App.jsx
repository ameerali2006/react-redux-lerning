
import './App.css'
import { useDispatch } from 'react-redux'
import { setName,clearName } from './store'
import Redux from './Redux'
function App() {
 const dispatch=useDispatch()


  return (
    <>
      <Redux/>
      <input type="text"  onChange={(e)=>dispatch(setName(e.target.value))}/>
    </>
  )
}

export default App
