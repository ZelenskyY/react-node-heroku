import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState("foo")
  useEffect(() => {
    fetch('/test')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return setState(() => res.msg)
      })
    .catch(() => setState(() => 'wrong api'))
  })

  return (

    <div className="App">

        <h1>{ state }</h1>

      <header className="App-header">
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
