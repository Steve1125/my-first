import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './MyComponent.js';

let index = 20;
function App() {
  //let count = 10;
  const [count, setCount] = useState(10);
  function myOnClickCount(e) {
    // count++;
    setCount(count + 1);
    console.log("my clicked count",count);
  }
  
  function myOnclickIndex(e) {
    index++;
    console.log("my clicked index",index);
  }
  return (
    <div className="App">
      <div>
        <h1 onClick={myOnClickCount}>Hello World: Count {count}</h1>
        <h1 onClick={myOnclickIndex}>Hello Workd : Index {index}</h1>
        <MyComp/>
      </div>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
