import React, { Component } from 'react';
import responsive from '../imgs/responsive.svg';
import communication from '../imgs/communication.svg';
import cms from '../imgs/cms.svg';
import design from '../imgs/design.svg';

class Whatido extends Component {
	render() {
		return (
			<section className="whatido">
				<header>
					<h2>What do I do?</h2>
					<p>
						I combine design and business logic to create user-friendly web
						pages and web apps.
					</p>
				</header>
				<article className="services">
					<div className="service-item">
						<img src={responsive} alt="" />
						<p>
							<span className="bold">Create</span> responsive websites and web
							apps that work on mobiles or computers
						</p>
					</div>
					<div className="service-item">
						<img src={communication} alt="" />
						<p>
							<span className="bold">Bridge</span> communication gap bet-ween
							designers and developers
						</p>
					</div>
					<div className="service-item">
						<img src={design} alt="" />
						<p>
							<span className="bold">Assist</span> with production of clean and
							functional design
						</p>
					</div>
					<div className="service-item">
						<img src={cms} alt="" style={{ paddingLeft: '10px' }} />
						<p>
							<span className="bold">Integrate</span> your website into an easy
							to use content management system
						</p>
					</div>
				</article>
				<div id="projects" />
			</section>
		);
	}
}

export default Whatido;
