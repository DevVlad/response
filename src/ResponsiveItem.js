import React, { Component, PropTypes } from 'react';

import { convertClassName } from './utils/convertClassName.js';

class ResponsiveItem extends Component {
	static contextTypes = {
	  breakPoint: PropTypes.string
	};

	render() {
		return (
			<div className={convertClassName(this.context.breakPoint, this.props.className)}>
				<h1>{this.props.msg}</h1>
				<p>current BP - {this.context.breakPoint}</p>
				<p>current className - {convertClassName(this.context.breakPoint, this.props.className)}</p>
				{this.props.children}
			</div>
		);
	}
}

export default ResponsiveItem;
