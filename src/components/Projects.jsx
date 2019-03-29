import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
			<section className="projects" id="projects">
				<header>
					<h2>Projects</h2>
				</header>
				<article className="projects-item">
					<div className="project-description">
						<h3>First project</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui
							doloribus reprehenderit odit nihil unde rerum aspernatur tempore,
							ea quod cumque iusto officiis harum beatae corporis. Autem
							assumenda cupiditate id!
						</p>
						<ul>
							<li>one</li>
							<li>two</li>
							<li>three</li>
						</ul>
					</div>
					<figure className="project-image">image</figure>
				</article>
				<article className="projects-item">
					<div className="project-description">
						<h3>Second project</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui
							doloribus reprehenderit odit nihil unde rerum aspernatur tempore,
							ea quod cumque iusto officiis harum beatae corporis. Autem
							assumenda cupiditate id!
						</p>
						<ul>
							<li>one</li>
							<li>two</li>
							<li>three</li>
						</ul>
					</div>
					<figure className="project-image">image</figure>
				</article>
				<div id="about" />
				<br />
				<br />
			</section>
		);
	}
}

export default Projects;
