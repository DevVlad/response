import React, { Component, PropTypes } from 'react';
import SizeMe from 'react-sizeme';

import ResponsiveItem from './ResponsiveItem.js';
import { getBreakPoint } from './utils/getBreakPoint.js';

class ResponsiveManager extends Component {
	static childContextTypes = {
		breakPoint: PropTypes.string,
		browserBreakPoint: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.state = {
			breakPoint: getBreakPoint(props.size.width),
			browserBreakPoint: getBreakPoint(props.browserWidth)
		};
	}

	getChildContext() {
		return {
			breakPoint: this.state.breakPoint,
			browserBreakPoint: this.state.browserBreakPoint
		};
	}

	shouldComponentUpdate(newProps) {
		return this.state.breakPoint !== getBreakPoint(newProps.size.width) || this.state.browserBreakPoint !== getBreakPoint(newProps.browserWidth);
	}

	componentWillReceiveProps(newProps) {
		const additionalBp = getBreakPoint(newProps.size.width);
		const browserBreakPoint = getBreakPoint(newProps.browserWidth)
		if (additionalBp !== this.state.breakPoint || browserBreakPoint !== this.state.browserBreakPoint) {
			this.setState({
				breakPoint: additionalBp,
				browserBreakPoint: browserBreakPoint
			});
		}
	}

	render() {
		console.log('-------------- ResponsiveManager-render ', this.props.size.width, this.state.breakPoint, this.state.browserBreakPoint,' ----------------------------');
		return (
			<div className="row">
					<ResponsiveItem className={"col-xs-12 visible-xs-block col-sm-6 col-md-6"} msg={'RespIt 1'}/>
					<ResponsiveItem className={"col-xs-12 visible-xs-block col-sm-6 col-md-6"} msg={'RespIt 2'}/>
					<ResponsiveItem className={"col-xs-12 visible-sm-block col-sm-6 col-md-6"} msg={'RespIt 3'}/>
					<ResponsiveItem className={"col-xs-12 visible-sm-block col-sm-6 col-md-6"} msg={'RespIt 4'}/>
					<ResponsiveItem className={"col-xs-12 visible-md-block col-sm-6 col-md-4"} msg={'RespIt 5'}/>
					<ResponsiveItem className={"col-xs-12 visible-md-block col-sm-6 col-md-4"} msg={'RespIt 6'}/>
					<ResponsiveItem className={"col-xs-12 col-sm-6 col-md-6 col-lg-4"} msg={'Always visible'}/>
			</div>
		);
	}
}

export default SizeMe()(ResponsiveManager);
