import React, { useState } from 'react'
import './App.css'

function App() {
  var [count, setCount] = useState(0)

  var increment = () => {
    setCount(count + 1)
  }

  var decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>

      <h1 style={{ color:"purple",background:"pink" }}>Counter App</h1>
      <h2 style={{ color:"pink",background:"purple" }}>{count}</h2>
      
    <button onClick={decrement} style={{ color:"red",background:'green'}}disabled={count === 0}>Decrement</button>   
    <button onClick={increment} style={{ color:"green",background:'red',marginLeft:'50px'}}>Increment</button>

    </div>
  )
}

export default App;