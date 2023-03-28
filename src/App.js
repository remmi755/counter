import React from 'react'
import './index.scss';

function App() {
    const [count, setCount] = React.useState(0)

  return (
      <div className="App">
        <div>
          <h2>Счетчик:</h2>
          <h1>{count}</h1>
          <button onClick={() => setCount(count -1)} className="minus">- Минус</button>
          <button onClick={() => setCount(count +1)} className="plus">Плюс +</button>
        </div>
      </div>
  );
}

export default App;
