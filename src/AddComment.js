import React, { Component } from 'react';
import {API_URL} from "./config.js";
import axios from "axios";


class AddComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: '',
		};
	}

	onChange = (e) => {
		this.setState({ comment: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post(`${API_URL}/api/images/${this.props.imageId}/comments`, this.state)
			.then(() => {
				window.location.reload();
			})
			.catch(console.error);
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type='text'
					name='comment'
					placeholder='Comment'
					onChange={this.onChange}
					value={this.state.comment}
				/>
				<button className='eButton' type='submit' onSubmit={this.onSubmit}>
					Add
				</button>
			</form>
		);
	}
}

export default AddComment;
