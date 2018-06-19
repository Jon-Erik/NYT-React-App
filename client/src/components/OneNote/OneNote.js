import React from "react";
import "./OneNote.css";
import API from "../../utils/API";

class OneNote extends React.Component {

	deleteNote = event => {
		event.preventDefault();

		let noteData = {
			noteId: this.props.noteid,
			articleId: this.articleId
		}
		
		API.deleteNote(noteData)
		.then(function(res) {
			console.log("article deleted");
		}).catch(function(err) {
			console.log(err);
		})
	}

	render() {
		return (
			<li key={this.props._id} 
			noteid={this.props._id}>
				{this.props.body}
					<a className="btn" 
					href=""
					onClick={this.deleteNote}>
						X
					</a>
			</li>
		)
	}
}

export default OneNote;