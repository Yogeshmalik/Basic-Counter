import './App.css';
import React, { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  function zero() {
    setCount(0)
  }  
  function increment() {
    setCount(prevCount => prevCount + 1)
  }
  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  function square() {
    setCount(prevCount => prevCount * prevCount)
  }
  function squareRoot() {
    setCount(prevCount => Math.sqrt(prevCount))
  }

  return (
    <div className="App">
      <h2 className='hero'>COUNTER!</h2>
      <h1>{count}</h1>
      <button onClick={zero}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={square}>Square</button>
      <button onClick={squareRoot}>SquareRoot</button>
      <footer>
        <p>Basic counter using reactJS (Y)</p>
      </footer>
    </div>
  );
}

export default App;
