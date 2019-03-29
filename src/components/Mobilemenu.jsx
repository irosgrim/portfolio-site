import React, { Component } from 'react';

class Mobilemenu extends Component {
	render() {
		return (
			<div className="mobile-menu" onClick={this.props.togglemobilemenu}>
				<div className="mobile-button">
					<div className="mobile-button-line" />
					<div className="mobile-button-line" />
					<div className="mobile-button-line" />
				</div>
			</div>
		);
	}
}

export default Mobilemenu;
