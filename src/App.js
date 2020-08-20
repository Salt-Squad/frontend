import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Delete from "./Delete";
import Images from "./Images";
import Submit from "./Submit";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='container'>
				<h1>🧂  A Lil Bit Salty 🧂 </h1>
				<h3>Get a Lil bit Salty with bad food porn!</h3>
				<Route exact path='/' component={Delete} />
				<Route path='/api/images' component={Images} />
				<Route path='/api/images' component={Submit} />
			</div>
		);
	}
}

export default App;
// test comment