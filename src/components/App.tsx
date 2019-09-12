import * as React from 'react';
import BarChart from './BarChart';
import ApiReader from './ApiReader';

function App() {

  const s = new URLSearchParams(window.location.search);
  const debt = parseFloat(s.get('loan'));
  const rate = parseFloat(s.get('rate')) / 100 / 12;
  const repayment = parseFloat(s.get('repayment'));

  let data = [debt]

  for (let i = 0; i < 30 * 12; i++) {
    if (data[data.length - 1] * (1 + rate) - repayment < 0)
    {
      break;
    }
    data.push(data[data.length - 1] * (1 + rate) - repayment);
  }
  return (
    <div className="App">
      <div className="Chart">
        <BarChart container={".Chart"} data={data} width={960} height={500}/>
      </div>
      {/* <div className="ApiReader">
        <ApiReader />
      </div> */}
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
