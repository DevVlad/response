import React, { Component, PropTypes } from 'react';

import { convertClassName } from './utils/convertClassName.js';

class ResponsiveItem extends Component {
	static contextTypes = {
	  breakPoint: PropTypes.string,
		browserBreakPoint: PropTypes.string
	};

	render() {
		const newClass = convertClassName(this.context.breakPoint, this.context.browserBreakPoint, this.props.className);
		return (
			<div className={newClass}>
				<h1>{this.props.msg}</h1>
				<p>current BP - {this.context.breakPoint}</p>
				<p>current className - {newClass}</p>
				{this.props.children}
			</div>
		);
	}
}

export default ResponsiveItem;
