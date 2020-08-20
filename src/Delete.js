import React, { Component } from 'react';
import axios from 'axios';
class Delete extends Component {

	delData = () => {
		axios
			.delete('http://localhost:3000/api/images/' + this.props.id)
			.then((response) => {
				window.location.reload();
			});
	};
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<img src={this.props.url} alt="horrible food"/>
				<button onClick={this.delData}>Delete</button>
			</div>
		);
	}
}
export default Delete;
