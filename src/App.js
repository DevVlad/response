import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'flexboxgrid/css/flexboxgrid.css';
// import 'bootstrap/dist/css/bootstrap.css';
import SizeMe from 'react-sizeme';

import ResponsiveManager from './ResponsiveManager.js';
import ResponsiveItem from './ResponsiveItem.js';

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
					<ResponsiveManager browserWidth={this.props.size.width}>
						<div className="row" style={{display: 'visible'}}>
							{/*Bootstrap*/}
							{/*}<ResponsiveItem className={"col-xs-12 visible-xs-block col-sm-4 col-md-4"} msg={'RespIt 1'}/>
							<ResponsiveItem className={"col-xs-12 visible-xs-block col-sm-4 col-md-4"} msg={'RespIt 2'}/>
							<ResponsiveItem className={"col-xs-12 visible-sm-block col-sm-4 col-md-4"} msg={'RespIt 3'}/>
							<ResponsiveItem className={"col-xs-12 visible-sm-block col-sm-4 col-md-4"} msg={'RespIt 4'}/>
							<ResponsiveItem className={"col-xs-12 visible-md-block col-md-offset-5 col-sm-4 col-md-4"} msg={'RespIt 5'}/>
							<ResponsiveItem className={"col-xs-12 visible-md-block col-md-offset-5 col-sm-4 col-md-4"} msg={'RespIt 6'}/>
							<ResponsiveItem className={"col-xs-12 col-sm-4 col-md-4 col-lg-4"} msg={'Always visible'}/>*/}
							{/*Flexboxgrid*/}
							<ResponsiveItem className={"col-xs-12 last-xs visible-xs col-sm-4 col-md-4"} msg={'RespIt 1'}/>
							<ResponsiveItem className={"col-xs-12 visible-xs col-sm-4 col-md-4"} msg={'RespIt 2'}/>
							<ResponsiveItem className={"col-xs-12 last-sm visible-sm col-sm-4 col-md-4"} msg={'RespIt 3'}/>
							<ResponsiveItem className={"col-xs-12 visible-sm col-sm-4 col-md-4"} msg={'RespIt 4'}/>
							<ResponsiveItem className={"col-xs-12 last-md visible-md col-md-offset-1 col-sm-4 col-md-6"} msg={'RespIt 5'}/>
							<ResponsiveItem className={"col-xs-12 visible-md col-md-offset-5 col-sm-4 col-md-6"} msg={'RespIt 6'}/>
							<ResponsiveItem className={"col-sm-4 col-md-4 col-lg-12 hidden-xs hidden-md hidden-lg"} msg={'sm-visible'}/>
							<ResponsiveItem className={"col-lg-12 visible-lg"} msg={'lg-visible'}/>
						</div>
					</ResponsiveManager>
				</div>
			</div>
		);
	}
}

export default SizeMe()(App);
