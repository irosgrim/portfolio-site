import React, { Component } from 'react';
import arrow from '../imgs/arrow.svg';

class Checkmyworkbtn extends Component {
    render() {
        return (
            <form action="https://github.com/irosgrim">
                <button
                    className="checkMyWork-btn"
                    id="checkMyWork"
                    type="submit">
                    {this.props.children}
                    <img
                        src={arrow}
                        alt="arrow icon"
                        style={{
                            marginLeft: '15px',
                            marginTop: '2px',
                            width: '21px',
                            height: '20px',
                            float: 'right'
                        }}
                    />
                </button>
            </form>
        );
    }
}

export default Checkmyworkbtn;
