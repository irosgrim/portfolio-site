import React, { Component, Fragment } from 'react';

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
                            <div className="project-description">
                            <h3>{project.title}</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: project.text
                                    }}
                                />
                                <br/>
                                <p>
                                    {project.sourceCode.text}
                                </p>
                                <a href={project.sourceCode.link}>{project.sourceCode.linkText}</a>
                               {project.stack.length > 0 && (
                                    <Fragment>
                                        <h3>Tools used:</h3>
                                        <ul>
                                            {
                                            project.stack.map((tool, index) => {
                                                    return (
                                                        <li key={index}>{tool}</li>
                                                    )
                                                }
                                            )
                                            }
                                        </ul>
                                    </Fragment>
                            )}
                            </div>
                            <figure>
                                <a href={project.articleLink}>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.imageAlt}
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
