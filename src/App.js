import React, { Component } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hello from './components/Hello';
import Whatido from './components/Whatido';
import Progressbar from './components/Progressbar';
import Projects from './components/Projects';

import axios from 'axios';

import './styles/App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			navbar_change_color: 'transparent',
			projects: []
		};
	}
	componentDidMount() {
		axios(
			'http://tattoosbyion.com/wp-json/wp/v2/projects?orderby=menu_order&order=asc'
		).then(response => {
			this.setState({ projects: response.data });
		});

		window.onscroll = () => {
			window.pageYOffset > 50
				? this.setState({
						navbar_change_color: 'rgba(251, 251, 251, 0.986)'
				  })
				: this.setState({
						navbar_change_color: 'rgba(215, 227, 245, 0)'
				  });
		};
	}
	render() {
		return (
			<div className="App">
				<Progressbar />
				<Header handlenavbarmove={this.state.navbar_change_color} />
				<Hello />
				<Whatido />
				<Projects projects={this.state.projects} />
				<About />
				<Contact />
				<Footer />
			</div>
		);
	}
}
export default App;
