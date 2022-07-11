import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import Routing from './Components/Routing';
import ResponsiveAppBar from './Components/NavBar/NavBar';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <ResponsiveAppBar />
        </header>
        <main>
          <Routing />
        </main>
        {/* <footer></footer> */}
      </div>
    </HashRouter>

  );
}

export default App;
