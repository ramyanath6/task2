import React from 'react'

const App = () => {
  function func1(){
    alert('hello welcome to the world')
  }
  return (
    <div>
      <h1 style={{color:'green'}}>Click the below button</h1>
      <button  style={{color:'brown'}}onClick={func1}>click</button>
    </div>
  )
}

export default App
