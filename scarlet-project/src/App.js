import React from 'react';
import logo from './SBlogoSmall-centered.png';
import logotext from './LogoBlendText.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      {/* <a
          className="App-link"
          href="https://scarletboom.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          PR/Marketing
        </a> */}


        <img src={logo} className="App-logo" alt="logo" />
        <img src={logotext} className="App-logo2" alt="logo2" />


        {/* <a
          className="App-link"
          href="https://scarletboom.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hotel Sales
        </a> */}


      </header>


    </div>
  );
}

export default App;
