import React, {useState,useCallback} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const ChildComponent = ({ callback }) => {
  console.log("🔄 Child Rendered");
  return <button onClick={callback}>Click Me</button>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized callback function (same reference across renders)
  const memoizedCallback = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  console.log("🚀 Parent Rendered - useCallback Reference:", memoizedCallback);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent callback={memoizedCallback} />
    </div>
  );
};





function App() {
  

  return (
    <>
      <ParentComponent/>
      
    </>
  )
}

export default App
