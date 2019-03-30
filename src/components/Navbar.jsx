import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul>
                        <li className="menu-item active">
                            <a href="#home">HOME</a>
                        </li>
                        <li className="menu-item">
                            <a href="#projects">PROJECTS</a>
                        </li>
                        <li className="menu-item">
                            <a href="#about">ABOUT</a>
                        </li>
                        <li className="menu-item">
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
