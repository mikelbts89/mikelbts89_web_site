import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routing from './Components/Routing';
import ResponsiveAppBar from './Components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ResponsiveAppBar/>  
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
