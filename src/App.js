import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SizeMe from 'react-sizeme';

import ResponsiveManager from './ResponsiveManager.js';
import { convertClassName } from './utils/convertClassName.js';
import { getBreakPoint } from './utils/getBreakPoint.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			breakPoint: 'lg'
		};
	}

	componentWillMount() {
		console.log(convertClassName('md', "clearfix visible-xs-block col-xs-6 col-xs-offset-3 col-md-5 col-md-push-3 visible-md-block col-md-offset-2 something other"));
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
