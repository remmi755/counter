import React from 'react'
import './index.scss';

function App() {
    const [count, setCount] = React.useState(0)

  return (
      <div className="App">
        <div>
          <h2>Counter:</h2>
          <h1>{count}</h1>
          <button onClick={() => setCount(count -1)} className="minus">- MINUS</button>
          <button onClick={() => setCount(count +1)} className="plus">PLUS +</button>
        </div>
      </div>
  );
}

export default App;
