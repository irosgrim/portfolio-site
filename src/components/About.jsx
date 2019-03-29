import React, { Component } from 'react';
import Aboutpicture from './Aboutpicture';
import Braggingbar from './Braggingbar';
import hat from '../imgs/hat.svg';

class About extends Component {
	render() {
		return (
			<section className="about-section">
				<div className="separator" />
				<Aboutpicture />
				<article>
					<p>
						Passionate and dedicated web developer with high knowledge of
						problem solving, visual UI design, UX design, user-centered design
						principles and methods, product development and front-end
						development.
					</p>
					<br />
					<br />
					<p>
						For the front end development I use <strong>HTML5, CSS3</strong> and{' '}
						<strong>Javascript</strong> and for the back end development I use{' '}
						<strong>Node.js</strong> and
						<strong>MongoDB</strong> or <strong>SQL</strong>. My favorite
						Javascript library is <strong>React.js</strong>
						although I have experience with <strong>Vue.js</strong> and{' '}
						<strong>JQuery</strong> too.
					</p>
					<br />
					<br />
					<h2>Education</h2>
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
