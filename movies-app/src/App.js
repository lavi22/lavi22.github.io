import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Products from './Components/Products/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    
        </header>

        <div className="App-container">
          <div className="custom-margin">&nbsp;</div>
          
          <div className="custom-content">
            <p>TV Shows:</p>

            <Products/>
          </div>
          
          <div className="custom-margin">&nbsp;</div> 
        </div>
      </div>
    );
  }
}

export default App;
