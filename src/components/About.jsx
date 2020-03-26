import React, { Component } from 'react';
import axios from 'axios';
import Aboutpicture from './Aboutpicture';
import Braggingbar from './Braggingbar';
import hat from '../imgs/hat.svg';

class About extends Component {
    constructor() {
        super();
        this.state = { loading: true, about: [] };
    }
    componentDidMount() {
        axios('about.json').then(response => {
            this.setState({ loading: false, about: response.data });
        });
    }
    render() {
        return (
            <section className="about-section">
                <div className="separator" />
                <Aboutpicture />
                <article>
                    {this.state.loading || (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.state.about.text
                            }}
                        />
                    )}
                    <h3 style={{ color: '#ffffff' }}>Education</h3>
                    <ul>
                        <li>
                            <img
                                src={hat}
                                alt="hat icon"
                                style={{ width: '35px', height: '22px' }}
                            />
                            <div className="li-content">
                                <p className="bold">B.S. Computer Science</p>
                                <p>Aurel Vlaicu University of Arad, Romania</p>
                                <p style={{ paddingTop: '5px' }}>2004 → 2008</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src={hat}
                                alt="hat icon"
                                style={{ width: '35px', height: '22px' }}
                            />
                            <div className="li-content">
                                <p className="bold">Computer Science</p>
                                <p>Aurel Vlaicu High School, Arad, Romania</p>
                                <p style={{ paddingTop: '5px' }}>2000 → 2004</p>
                            </div>
                        </li>
                    </ul>
                    <Braggingbar />
                </article>
                <div id="contact" />
            </section>
        );
    }
}

export default About;
