import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Routing from './Components/Routing';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Routing />
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
