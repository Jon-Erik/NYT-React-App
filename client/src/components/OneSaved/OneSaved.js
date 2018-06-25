import React from "react";
import "./OneSaved.css";
import API from "../../utils/API";
import OneNote from "../OneNote";

class OneSaved extends React.Component {
	
	state = {
		newNote: "",
		notes: this.props.notes
	}

	handleInputChange = event => {
		let {name, value} = event.target;

		this.setState({
			[name]: value
		})
	}

	saveNote = event => {
		event.preventDefault();

		let newNoteData = {
			note: this.state.newNote,
			articleId: this.props.articleId
		}

		API.saveNote(newNoteData)
		.then((res) => {
			// console.log(res);
			let savedNotes = this.state.notes;
			let newNote = {
				body: newNoteData.note,
				_id: res.data.notes[res.data.notes.length -1]
			}

			savedNotes.push(newNote);
			this.setState({
				notes: savedNotes
			})
			console.log("note saved");
		}).catch(function(err) {
			console.log(err);
		})
	}

	deleteNote = event => {
		event.preventDefault();
		let noteId = event.target.id;
		let noteIndex = event.target.name;
		console.log(noteIndex);

		let noteData = {
			noteId: noteId,
			articleId: this.props.articleId
		}
		//console.log(noteData);
		API.deleteNote(noteData)
		.then((res) => {
			let updatedNotes = this.state.notes;
			updatedNotes.splice(noteIndex, 1)
			this.setState({
				notes: updatedNotes
			});
			console.log("note deleted");
		}).catch(function(err) {
			console.log(err);
		})
	}

	render() {
		return(
			<div className="card">
			  <div className="card-body">
			    <a href={this.props.url} ><h5 className="card-title">{this.props.headline}</h5></a>
			    <p className="card-text">Published: {this.props.pubDate.substr(0, 10)}</p>
			    <p className="card-text">{this.props.summary}</p>
			    {!this.props.notes.length ? (
			    		<p><i>No notes to display</i></p>
			    	) : (
			    		<ul>
			    		{this.state.notes.map(note => (
			    			<OneNote key={this.state.notes.indexOf(note)}
			    				index={this.state.notes.indexOf(note)}
			    				body={note.body}
			    				noteid={note._id}
			    				articleId={this.props.articleId}
			    				deleteNote={this.deleteNote}/>
			    		))}
			    		</ul>
			    	)}
			    <textarea 
			    	type="text" 
			    	placeholder="Type a new note here"
			    	onChange={this.handleInputChange}
			    	name="newNote"/>
			    <a href="" className="btn" onClick={this.saveNote}>Add note to article</a>
			    <a href="" 
			    	 className="btn" 
			    	 onClick={this.props.deleteArticle} 
			    	 id={this.props.articleId}
			    	 name={this.props.articleIndex}>
			    	 Delete Article</a>
			  </div>
			</div>
		)}
};

export default OneSaved;