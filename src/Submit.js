import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from "./config.js"
class Submit extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
		};
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post(API_URL + '/api/images/new', this.state)
			.then((response) => {
				console.log(response);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		return (
			<div className='postContainer'>
				<p>Post your own image!</p>
				<form className='commentForm' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Title'
						value={this.state.name}
						onChange={this.onChange}
					/>
					<input
						type='text'
						name='url'
						placeholder='URL'
						value={this.state.url}
						onChange={this.onChange}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}
export default Submit;
