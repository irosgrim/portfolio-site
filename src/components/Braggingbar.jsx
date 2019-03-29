import React from 'react';
//programming icons
import html from '../imgs/html.png';
import css from '../imgs/css.png';
import js from '../imgs/js.png';
import node from '../imgs/node.png';
import react from '../imgs/react.png';
import vue from '../imgs/vue.png';
import mongo from '../imgs/mongo.png';
import sass from '../imgs/sass.png';

function Braggingbar() {
	return (
		<div className="bragging-bar">
			<div>
				<img src={html} alt="html5" />
				<img src={css} alt="css3" />
				<img src={js} alt="js" />
				<img src={node} alt="node" />
			</div>
			<div>
				<img src={react} alt="react" />
				<img src={vue} alt="vue" />
				<img src={mongo} alt="mongoDB" />
				<img src={sass} alt="sass" />
			</div>
		</div>
	);
}
export default Braggingbar;
