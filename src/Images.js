import React, { Component } from 'react';
import axios from 'axios';
import Delete from './Delete';
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
			<div className='imageContainer'>
				{this.state.images.map((image) => (
					<p><Delete name={image.name} url={image.url} id={image._id} /> </p>
					
				))}
				
			</div>
		);
	}
}
export default Images;
