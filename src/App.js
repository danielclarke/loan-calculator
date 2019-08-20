import React from 'react';
import BarChart from './BarChart';
import logo from './logo.svg';
import './App.css';

function App() {
  // const data = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3]
  // setInterval(App, 1000);
  const data = [...Array(25)].map((el, i) => {return Math.sin(2 * Math.PI * i / 25) * 500});
  return (
    <div className="App">
      <div className="Chart">
        <BarChart container={".Chart"} data={data} width={960} height={500}/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}
export default App;
