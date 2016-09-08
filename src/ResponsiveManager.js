import React, { Component, PropTypes } from 'react';
import ResponsiveItem from './ResponsiveItem.js';

class ResponsiveManager extends Component {
	static childContextTypes = {
		breakPoint: PropTypes.string,
		convertClassName: PropTypes.func
	};

	getChildContext() {
		return {
			breakPoint: this.props.breakPoint
		};
	}

	render() {
		console.log('ResponsiveManager-render');
		return (
			<div className="row">
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt1'}/>
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt2'}/>
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt3'}/>
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt4'}/>
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt5'}/>
					<ResponsiveItem className={"col-xs-12 clearfix visible-xs-block col-sm-12 col-md-6"} msg={'RespIt6'}/>
			</div>
		);
	}
}

export default ResponsiveManager;
