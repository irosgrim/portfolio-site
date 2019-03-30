import React, { Component } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hello from './components/Hello';
import Mobilenav from './components/Mobilenav';
import Whatido from './components/Whatido';
import Progressbar from './components/Progressbar';
import Projects from './components/Projects';

import axios from 'axios';

import './styles/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showmobilemenu: false,
            navbar_change_color: 'transparent',
            projects: []
        };
        this.handleToggleMobileMenu = this.handleToggleMobileMenu.bind(this);
    }
    componentDidMount() {
        axios(
            'https://tattoosbyion.com/wp-json/wp/v2/projects?orderby=menu_order&order=asc'
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
    handleToggleMobileMenu() {
        this.setState({ showmobilemenu: !this.state.showmobilemenu });
    }
    render() {
        return (
            <div className="App">
                <Progressbar />
                <Header
                    handlenavbarmove={this.state.navbar_change_color}
                    togglemobilemenu={this.handleToggleMobileMenu}
                />
                <Mobilenav
                    showmobilemenu={this.state.showmobilemenu}
                    togglemobilemenu={this.handleToggleMobileMenu}
                />
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
