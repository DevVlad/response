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
		const browserBreakPoint = getBreakPoint(newProps.browserWidth);
		if (additionalBp !== this.state.breakPoint || browserBreakPoint !== this.state.browserBreakPoint) {
			this.setState({
				breakPoint: additionalBp,
				browserBreakPoint: browserBreakPoint
			});
		}
	}

	render() {
		console.log('-------------- ResponsiveManager-render ', this.state,' ----------------------------');
		return (
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
				<ResponsiveItem className={"col-xs-12 last-md visible-md col-md-offset-5 col-sm-4 col-md-4"} msg={'RespIt 5'}/>
				<ResponsiveItem className={"col-xs-12 visible-md col-md-offset-5 col-sm-4 col-md-4"} msg={'RespIt 6'}/>
				<ResponsiveItem className={"col-sm-4 col-md-4 col-lg-12 hidden-xs hidden-md hidden-lg"} msg={'sm-visible'}/>
				<ResponsiveItem className={"col-lg-12 visible-lg"} msg={'lg-visible'}/>
			</div>
		);
	}
}

export default SizeMe()(ResponsiveManager);
