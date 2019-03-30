import React, { Component } from 'react';
import Checkmyworkbtn from './Checkmyworkbtn';

class Hello extends Component {
    render() {
        return (
            <section className="hello" id="home">
                <article className="hello-column">
                    <header className="big-text">
                        Hi, i'm a front end{' '}
                        <span className="highlight">developer!</span>
                    </header>
                    <Checkmyworkbtn>check my work</Checkmyworkbtn>
                </article>
            </section>
        );
    }
}

export default Hello;
