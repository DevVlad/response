import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SizeMe from 'react-sizeme';

import ResponsiveManager from './ResponsiveManager.js';
// import { getBreakPoint } from './utils/getBreakPoint.js';

class App extends Component {

	render() {
		// console.log('***************************************');
		// console.log('lg-min-width', window.matchMedia('(min-width: 1200px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
		// console.log('md-min-width', window.matchMedia('(min-width: 992px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
		// console.log('sm-min-width', window.matchMedia('(min-width: 768px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
		// console.log('xs-min-width', window.matchMedia('(min-width: 767px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
		// console.log('-----------------------------------------------');
		// console.log('lg-max-width', window.matchMedia('(max-width: 1200px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
		// console.log('md-max-width', window.matchMedia('(max-width: 992px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
		// console.log('sm-max-width', window.matchMedia('(max-width: 768px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
		// console.log('xs-max-width', window.matchMedia('(max-width: 767px)').matches, Math.round(this.props.browserWidth), getBreakPoint(this.props.browserWidth));
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
					<div className="row" style={{height: '50px', zIndex: 10}}>
						<span className="visible-xs-block">xs</span>
						<span className="visible-sm-block">sm</span>
						<span className="visible-md-block">md</span>
						<span className="visible-lg-block">lg</span>
					</div>
					<ResponsiveManager browserWidth={this.props.size.width}/>
				</div>
			</div>
		);
	}
}

export default SizeMe()(App);
