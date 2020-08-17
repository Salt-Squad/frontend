import React, { Component } from 'react';

class Images extends Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {}
	handleChange = () => {
		fetch()
			.then((res) => res.json())
			.then((res) => {
				this.setState({});
			})
			.catch(console.error);
	};
	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<p>The Images Component is standing by!</p>
			</div>
		);
	}
}
export default Images;