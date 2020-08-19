import React, { Component } from 'react';
import axios from 'axios';
class Images extends Component {
	constructor() {
		super();
		this.state = {
			images: null,
		};
	}
componentDidMount = () => {
	axios.get("/api/images").then(response => {
		console.log(response);
		// this.setState({
		// 	images: response.data
		// });
	}); 
};

	render() {
		return (
			<div>
				<p>The Images Component is standing by!</p>
			</div>
		);
	}
}
export default Images;