import './style.scss';
import { useState } from 'react';
import Board from './components/board';

function App() {
  return (
    <>
      <div className="app">
        <button type="button" onClick={btnClick}>
          Click me
        </button>
        <h2>{counter}</h2>
      </div>
    </>
  );
}

export default App;
