import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { convertClassName } from './utils/convertClassName.js';

class App extends Component {
	componentWillMount() {
		console.log(convertClassName('xs', "col-xs-6 col-xs-offset-3 col-md-5 col-md-push-3 col-md-offset-2 something other"));
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
