import React, { Component } from 'react';
import axios from "axios";

class Comments extends Component {
	constructor() {
		super();
		this.state = {
			images: [],
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const url = "localhost:3000/api/images/new"
		axios.post(url, this.state.name);
	};

	handleChange = (event) => {
		this.setState({ title: event.target.value });
	};

	render() {
		return (
			<div>
				<p>Comment Below</p>
				<form className='submitForm'>
					<input
						type='text'
						name='title'
						className='titleField'
						onChange={this.handleChange}
						value={this.state.title}
					/>
					<input type='text' name='urlLink' className='urlField' />
					<input type='submit' name='Submit' className='submitButton' />
				</form>
			</div>
		);
	}
}
export default Comments;
