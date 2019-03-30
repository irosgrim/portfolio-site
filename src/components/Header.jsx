import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Mobilemenu from './Mobilemenu';

class Header extends Component {
    render() {
        return (
            <div
                className="header-container"
                style={{ backgroundColor: this.props.handlenavbarmove }}>
                <header className="main-header">
                    <Logo />
                    <Navbar />
                    <Mobilemenu
                        togglemobilemenu={this.props.togglemobilemenu}
                        showmobilemenu={this.props.showmobilemenu}
                    />
                </header>
            </div>
        );
    }
}

export default Header;
