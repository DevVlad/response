import { Component, PropTypes } from 'react';
import SizeMe from 'react-sizeme';

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
		return this.props.children;
		// return (
		// 	<div>{this.props.children}</div>
		// );
	}
}

export default SizeMe()(ResponsiveManager);
