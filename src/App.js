import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SizeMe from 'react-sizeme';

import ResponsiveManager from './ResponsiveManager.js';
import { getBreakPoint } from './utils/getBreakPoint.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			breakPoint: 'lg'
		};
	}

	shouldComponentUpdate() {
		return this.state.breakPoint !==  getBreakPoint(this.props.size.width);
	}

	componentWillReceiveProps(newProps) {
		const additionalBp = getBreakPoint(this.props.size.width);
		if (additionalBp !== this.state.breakPoint) {
			this.setState({
				breakPoint: additionalBp
			});
		}
	}

	render() {
		console.log('App-render');
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
						width: '750px',
						height: '750px',
						borderStyle: 'solid'
					}}>
					<ResponsiveManager breakPoint={this.state.breakPoint}/>
				</div>
			</div>
		);
	}
}

export default SizeMe()(App);
