import logo from './logo.svg';
import SearchBox from './components/SearchBox';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBox>
       
        </SearchBox>
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
