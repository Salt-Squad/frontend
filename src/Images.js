import React, { Component } from 'react';
import axios from 'axios';
class Images extends Component {
	constructor() {
		super();
		this.state = {
			images: [],
		};
	}
	componentDidMount = () => {
		axios.get('/api/images').then((response) => {
			console.log(response.data);
			this.setState({ images: response.data });
		});
	};
	render() {
		return (
			<div>
				{this.state.images.map((image) => (
					<h1>{image.name}</h1>
				))}
			</div>
		);
	}
}
export default Images;
