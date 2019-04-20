import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [state, setState] = useState(['hi'])
  useEffect(() => {
    fetch('/api/passwords')
      .then(res => res.json())
      .then(res => setState(() => res))
  })

  return (

    <div className="App">
      { state.map(val => (
        <h1 key={ val }>{ val }</h1>
      )) }
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
    </div>
  )
}


export default App;
