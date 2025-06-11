import { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  //Handlers
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </>
  )
};

export default CounterApp;
