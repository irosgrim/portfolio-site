import React from 'react';
import email from '../imgs/email_icon.svg';
import git from '../imgs/git_icon.svg';
import linkedin from '../imgs/linkedin_icon.svg';

function Contact() {
	return (
		<section className="contact-section">
			<header className="social-media">
				<div className="social-media-container">
					<a href="mailto: jrunin@gmail.com">
						<img src={email} alt="email" title="email" />
					</a>
					<a href="https://github.com/irosgrim">
						<img src={git} alt="git hub" title="git hub" />
					</a>
					<a href="https://www.linkedin.com/in/ioan-rosgrim-933439180/">
						<img src={linkedin} alt="linked in" title="linked in" />
					</a>
				</div>
			</header>
			<div className="contact-text">
				<h3>CONTACT</h3>
				<p>
					For questions or job offers, i can be reached through social media or
					the form bellow:
				</p>
			</div>
			<div className="contact-form">
				<div className="input">
					<label htmlFor="text">Name</label>
					<input type="text" />
				</div>
				<div className="input">
					<label htmlFor="email">Email</label>
					<input type="email" />
				</div>
				<div className="message-input">
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="30" rows="10" />
				</div>

				<button className="send-btn">send</button>
			</div>
		</section>
	);
}
export default Contact;
