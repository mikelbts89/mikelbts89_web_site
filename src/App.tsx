import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <AboutMe />
      </main>
      <aside></aside>
      <footer></footer>
    </div>
  );
}

export default App;
