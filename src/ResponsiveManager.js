import React, { Component, PropTypes } from 'react';
import ResponsiveItem from './ResponsiveItem.js';

class ResponsiveManager extends Component {
	static childContextTypes = {
		breakPoint: PropTypes.string,
		convertClassName: PropTypes.func
	};

	getChildContext() {
		return {
			breakPoint: "sm"
		};
	}

	render() {

		return (
			<div className="row">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt1'}/>
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt2'}/>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6 clearfix visible-sm-block"} msg={'RespIt3'}/>
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6 clearfix visible-sm-block"} msg={'RespIt4'}/>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6 clearfix visible-lg-block"} msg={'RespIt5'}/>
					<ResponsiveItem className={"col-xs-12 col-sm-12 col-md-6 clearfix visible-lg-block"} msg={'RespIt6'}/>
				</div>
			</div>
		);
	}
}

export default ResponsiveManager;
