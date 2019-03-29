import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
class Logo extends Component {
	render() {
		return (
			<div className="logo">
				<img src={logo} alt="logo" className="logo" />
			</div>
		);
	}
}

export default Logo;
