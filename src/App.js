import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SizeMe from 'react-sizeme';

import ResponsiveManager from './ResponsiveManager.js';

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<br/>
				<div
					className="container"
					style={{
						width: '50%',
						height: '750px',
						borderStyle: 'solid',
						position: 'absolute',
						left:'10px'
					}}>
					<ResponsiveManager browserWidth={this.props.size.width}/>
				</div>
			</div>
		);
	}
}

export default SizeMe()(App);
