import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
				<h2>Salty is alive</h2>
				<Route exact path='/' component={Header} />
				<Route path='/api/images' component={Images} />
				<Route path='/api/images' component={Comments} />
			</div>
		);
	}
}

export default App;
// test comment