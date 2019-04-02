import React, { useState } from 'react';
import emailIcon from '../imgs/email_icon.svg';
import git from '../imgs/git_icon.svg';
import linkedin from '../imgs/linkedin_icon.svg';

function Contact() {
    const [contactModalVisible, setContactModalVisible] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handleMessageChange = e => {
        setMessage(e.target.value);
    };
    const encode = data => {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };
    const handleSubmit = e => {
        const state = { name, email, message };
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...state })
        })
            .then(() => {
                setContactModalVisible(!contactModalVisible);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => console.log(error));

        e.preventDefault();
    };

    return (
        <section className="contact-section">
            {contactModalVisible && (
                <div
                    className="contact-modal"
                    onClick={e => {
                        if (
                            e.target.className === 'contact-modal' ||
                            e.target.className === 'btn messagesent-btn'
                        ) {
                            setContactModalVisible(!contactModalVisible);
                        } else {
                            return null;
                        }
                    }}>
                    <div className="confirm-window">
                        <h2>Message sent!</h2>
                        <p>I will get back to you as soon as I can</p>
                        <button className="btn messagesent-btn">ok</button>
                    </div>
                </div>
            )}
            <header className="social-media">
                <div className="social-media-container">
                    <a href="mailto: irosgrim@ionwebservices.dev">
                        <img src={emailIcon} alt="email" title="email" />
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
                    For questions or job offers, i can be reached through social
                    media or the form bellow:
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="contact-form">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="message-input">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            required
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>

                    <button className="btn send-btn" type="submit">
                        send
                    </button>
                </div>
            </form>
        </section>
    );
}
export default Contact;
