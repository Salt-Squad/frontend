import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from "./config.js"

class Delete extends Component {
	constructor() {
		super();
		this.state = {
			name:"",
		};
	}
	delData = () => {
		axios
			.delete(API_URL + '/api/images/' + this.props.id)
			.then((response) => {
				window.location.reload();
			});
	};
	onChange = (e) => {
		this.setState({ name: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.put(API_URL + '/api/images/' + this.props.id, this.state)
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
			<div>
				<h2>{this.props.name}</h2>
				<img src={this.props.url} alt='horrible food' />

				<form onSubmit={this.onSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Creative Caption'
						onChange={this.onChange}
						value={this.state.name}
					/>
					<button className='eButton' onSubmit={this.onSubmit}>
						Edit
					</button>
				</form>
				<button className='dButton' onClick={this.delData}>
					Delete
				</button>
			</div>
		);
	}
}
export default Delete;
