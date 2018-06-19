import React from "react";
import "./OneSaved.css";
import API from "../../utils/API";
import OneNote from "../OneNote";

class OneSaved extends React.Component {
	
	state = {
		newNote: ""
	}

	handleInputChange = event => {
		let {name, value} = event.target;

		this.setState({
			[name]: value
		})
	}

	deleteArticle = (articleId) => {

	}

	saveNote = event => {
		event.preventDefault();

		let newNoteData = {
			note: this.state.newNote,
			articleId: this.props.articleId
		}

		API.saveNote(newNoteData)
		.then(function(res) {
			console.log("note saved");
		}).catch(function(err) {
			console.log(err);
		})
	}

	deleteNote = (articleId, noteId) => {

	}

	render() {
		return(
			<div className="card">
			  <div className="card-body">
			    <a href={this.props.url} ><h5 className="card-title">{this.props.headline}</h5></a>
			    <p className="card-text">Published: {this.props.pubDate.substr(0, 10)}</p>
			    <p className="card-text">{this.props.summary}</p>
			    {!this.props.notes ? (
			    		<p><i>No notes to display</i></p>
			    	) : (
			    		<ul>
			    		{this.props.notes.map(note => (
			    			<OneNote body={note.body}
			    				key={note._id}
			    				noteid={note.id}
			    				articleId={this.props._id}/>
			    		))}
			    		</ul>
			    	)}
			    <textarea 
			    	type="text" 
			    	placeholder="Type a new note here"
			    	onChange={this.handleInputChange}
			    	name="newNote"/>
			    <a href="" className="btn" onClick={this.saveNote}>Add note to article</a>
			    <a href="" className="btn" onClick={this.deleteNote}>Delete Article</a>
			  </div>
			</div>
		)}
};

export default OneSaved;