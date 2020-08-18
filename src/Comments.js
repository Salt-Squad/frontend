import React, { Component } from 'react';

class Comments extends Component {
	render() {
		return (
			<div>
				<p>Comment Below</p>
				<form className="commentForm">
					<input type="text" name="Comment" className="commentField"/>
					<input type="submit" name="Submit" className="submitButton"/>
				</form>
			</div>
		);
	}
}
export default Comments;