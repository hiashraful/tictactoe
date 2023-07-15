import './style.scss';
import { useState } from 'react';
// import Board from './components/board';

function App() {
  const [counter, counterUpdate] = useState(new Date().toLocaleTimeString());
  const btnClick = () => {
    const timerId = setInterval(() => {
      counterUpdate(val => {
        return new Date().toLocaleTimeString();
      });
    }, 1000);
  };
  
  return (
    <div className="app">
      <button type="button" onClick={btnClick}>
        Click me
      </button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
