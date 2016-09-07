import React, { Component, PropTypes } from 'react';

class ResponsiveItem extends Component {
	static contextTypes = {
	  breakPoint: PropTypes.string
	};

	render() {
		return (
			<div className={this.props.className}>
				<h1>{this.props.msg}</h1>
				<p>current BP - from context: {this.context.breakPoint}</p>
				{this.props.children}
			</div>
		);
	}
}

export default ResponsiveItem;
