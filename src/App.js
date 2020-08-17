import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Images from "./Images";
import Comments from "./Comments";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='container'>
				<Router>
					<h2>Salty is alive</h2>
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
