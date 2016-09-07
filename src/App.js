import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getBrPoint, respClassHandler } from './utils/respClassHandler.js';

class App extends Component {
	componentWillMount() {
		console.log(respClassHandler("col-md-6 col-sm-2", getBrPoint(100)));
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
