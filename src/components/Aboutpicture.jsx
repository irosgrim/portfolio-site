import React from 'react';
import ion from '../imgs/ion.jpg';

function Aboutpicture() {
    return (
        <header className="about-header">
            <h2 className="section-title">About </h2>
            <figure className="round-picture">
                <img src={ion} alt="ion rosgrim" />
                <h2 className="about-name">Ion Rosgrim</h2>
                <p>web developer</p>
            </figure>
        </header>
    );
}
export default Aboutpicture;
