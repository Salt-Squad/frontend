import React, { Component } from 'react';
import axios from 'axios';
class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			url: ' ',
		};
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post('/api/images/new', this.state)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		return (
			<div>
				<p>Comment Below</p>
				<form className='commentForm' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='name'
						value={this.state.name} 
						onChange={this.onChange}
					 ></input>
					<input
						type='text'
						name='url'
						value={this.state.url}
						onChange={this.onChange}
					/>
					<button type='submit'>submit</button>
				</form>
			</div>
		);
	}
}
export default Comments;
