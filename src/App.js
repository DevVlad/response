import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
// import 'bootstrap/dist/css/bootstrap.css';
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
						width: '75%',
						height: '750px',
						borderStyle: 'solid',
						position: 'absolute',
						left:'10px'
					}}>
					{/*}<div className="row" style={{height: '50px', zIndex: 10}}>
						<span className="visible-xs-block">xs</span>
						<span className="visible-sm-block">sm</span>
						<span className="visible-md-block">md</span>
						<span className="visible-lg-block">lg</span>
					</div>*/}
					<ResponsiveManager browserWidth={this.props.size.width}/>
				</div>
			</div>
		);
	}
}

export default SizeMe()(App);
