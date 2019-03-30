import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="logo" className="logo" />
                </a>
            </div>
        );
    }
}

export default Logo;
