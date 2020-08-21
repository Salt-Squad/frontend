import React, { Component } from 'react';
import axios from 'axios';
import Image from './Image';
import {API_URL} from "./config.js"
class Images extends Component {
	constructor() {
		super();
		this.state = {
			images: [],
		};
	}
	componentDidMount = () => {
		axios.get(API_URL + '/api/images').then((response) => {
			console.log(response.data);
			this.setState({ images: response.data });
		});
	};


	render() {
		return (
			<div className='imageContainer'>
				{this.state.images.map((image) => (
					<Image key={image._id} name={image.name} url={image.url} id={image._id} comments={image.comments}/>
				))}
			</div>
		);
	}
}
export default Images;
