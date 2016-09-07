import React, { Component, PropTypes } from 'react';
import ResponsiveItem from './ResponsiveItem.js';

class ResponsiveManager extends Component {
	static childContextTypes = {
		breakPoint: PropTypes.string,
		convertClassName: PropTypes.func
	};

	getChildContext() {
		return {
			breakPoint: "xs"
		};
	}

	render() {

		return (
			<div className="row">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6"} msg={'ResponsiveItem1'}/>
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6"} msg={'ResponsiveItem2'}/>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6"} msg={'ResponsiveItem3'}/>
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6"} msg={'ResponsiveItem4'}/>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6"} msg={'ResponsiveItem5'}/>
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6"} msg={'ResponsiveItem6'}/>
				</div>
			</div>
		);
	}
}

export default ResponsiveManager;
