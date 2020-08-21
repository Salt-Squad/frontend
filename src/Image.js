import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';
import Comments from './Comments.js';
import AddComment from './AddComment.js';
import { Link } from 'react-router-dom';

class Image extends Component {
	constructor() {
		super();
		this.state = {
			image: {
				name: '',
				url: '',
				_id: '',
				comments: [],
			},
		};
	}
	delData = () => {
		axios
			.delete(API_URL + '/api/images/' + this.state.image._id)
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
			.put(API_URL + '/api/images/' + this.state.image._id, this.state)
			.then((response) => {
				console.log(response);
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	componentDidMount() {
		const id = this.props.id || this.props.match.params.id;
		axios.get(`${API_URL}/api/images/${id}`).then((res) => {
			this.setState({
				image: res.data,
			});
		});
	}

	render() {
		return (
			<div>
				<h2>{this.state.image.name}</h2>
				<Link to={'/'+this.state.image._id}> <img src={this.state.image.url} alt='horrible food' /> </Link>
				<form onSubmit={this.onSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Creative Caption'
						onChange={this.onChange}
						value={this.state.image.name}
					/>
					<button className='eButton' type='submit' onSubmit={this.onSubmit}>
						Edit
					</button>
					<button className='dButton' type='button' onClick={this.delData}>
						Delete
					</button>
				</form>
				<AddComment imageId={this.state.image._id} />
				<h4>Comments:</h4>
				<Comments
					comments={this.state.image.comments}
					imageId={this.state.image._id}
				/>
			</div>
		);
	}
}
export default Image;
