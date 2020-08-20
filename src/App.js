import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Delete from "./Delete";
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
				<h2>A lil Bit Salty</h2>
				<Route exact path='/' component={Delete} />
				<Route path='/api/images' component={Images} />
				<Route path='/api/images' component={Comments} />
			</div>
		);
	}
}

export default App;
// test comment