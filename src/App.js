import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveManager from './ResponsiveManager.js';
import { convertClassName } from './utils/convertClassName.js';

class App extends Component {
	componentWillMount() {
		console.log(convertClassName('xs', "clearfix visible-xs-block col-xs-6 col-xs-offset-3 col-md-5 col-md-push-3 visible-md-block col-md-offset-2 something other"));
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<br/>
				<div className="container" style={{width: '750px', height: '750px', borderStyle: 'solid'}}>
					<ResponsiveManager />
				</div>
			</div>
		);
	}
}

export default App;
