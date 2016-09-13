import React, { Component, PropTypes } from 'react';

// import { convertClassNameB } from './utils/convertClassName.js';
import { convertClassNameFBG } from './utils/convertClassName.js';

class ResponsiveItem extends Component {
	static contextTypes = {
	  breakPoint: PropTypes.string,
		browserBreakPoint: PropTypes.string
	};

	render() {
		// const newClass = convertClassNameB(this.context.breakPoint, this.context.browserBreakPoint, this.props.className);
		const newClass = convertClassNameFBG(this.context.breakPoint, this.context.browserBreakPoint, this.props.className);
		console.log('child render - ', this.props.msg, newClass);
		if (newClass !== 'no-render') {
			return (
				<div className={newClass}>
					<h1>{this.props.msg}</h1>
					<p>current BP - {this.context.breakPoint}</p>
					<p>current browser BP - {this.context.browserBreakPoint}</p>
					<p>current className - {newClass}</p>
					{this.props.children}
				</div>
			);
		} else {
			return null;
		}

	}
}

export default ResponsiveItem;
