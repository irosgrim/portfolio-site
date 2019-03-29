import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
			<section className="projects">
				<header>
					<h2>Projects</h2>
				</header>

				{this.props.projects.map((project, index) => {
					return (
						<article className="projects-item" key={index}>
							<div
								className="project-description"
								dangerouslySetInnerHTML={{ __html: project.acf.project }}
							/>
							<figure>
								<a href={project.acf.project_link}>
									<img
										src={project.acf.image.url}
										alt={project.acf.image.alt}
										className="project-image"
									/>
								</a>
							</figure>
						</article>
					);
				})}

				<div id="about" />
				<br />
				<br />
				<br />
			</section>
		);
	}
}

export default Projects;
