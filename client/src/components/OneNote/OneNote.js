import React from "react";
import "./OneNote.css";

class OneNote extends React.Component {

	render() {
		return (
			<li className="one-note">
				{this.props.body}
					<a className="btn delete-note" 
					href=""
					name={this.props.index}
					id={this.props.noteid}
					onClick={this.props.deleteNote}
					>
						&times;
					</a>
			</li>
		)
	}
}

export default OneNote;