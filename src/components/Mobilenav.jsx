import React, { Component } from 'react';

class Mobilenav extends Component {
    render() {
        return (
            <div
                className={
                    this.props.showmobilemenu
                        ? 'mobile-menu-frame visible'
                        : 'mobile-menu-frame hidden'
                }>
                <ul>
                    <li>
                        <a href="#home" onClick={this.props.togglemobilemenu}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={this.props.togglemobilemenu}>
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={this.props.togglemobilemenu}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={this.props.togglemobilemenu}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Mobilenav;
