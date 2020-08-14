import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Images from "./Images";
import Comments from "./Comments";

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Router>
					<h1>Let's get Salty!</h1>
					<main>
						<Header />,
						<Images />,
						<Comments />,
					</main>
				</Router>
			</div>
		);
	}
}

export default App;
