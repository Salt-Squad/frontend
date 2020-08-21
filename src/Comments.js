import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from './config.js';
import moment from 'moment';


class Comments extends Component {
	deleteComment = (commentId) => {
		axios
			.delete(
				`${API_URL}/api/images/${this.props.imageId}/comments/${commentId}`
			)
			.then(() => {
                  window.location.reload();
            })
            .catch(console.error)
	};

	render() {
		let comments = this.props.comments.map((comment) => {
			return (
				<div key={comment._id}>
					<p>
						{moment(comment.createdAt).fromNow()}: {comment.comment}
					</p>
					<button onClick={() => this.deleteComment(comment._id)}>X</button>
				</div>
			);
		});
		if (!comments.length) {
			comments = 'No comment.';
		}

		return <div>{comments}</div>;
	}
}

export default Comments;
