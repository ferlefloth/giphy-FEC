import logo from './logo.svg';
import SearchBox from './components/SearchBox';
import ImageList from './components/ImageList';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([])
// contenedor con todos los componentes 


  return (
    <div className="App">
      <header className="App-header">
        <SearchBox info={setData}>
        
        </SearchBox>
        <ImageList info ={data}>
        </ImageList>
      </header>
    </div>
  );
}

export default App;
