import React from "react";
import "./OneNote.css";

class OneNote extends React.Component {

	render() {
		return (
			<li >
				{this.props.body}
					<a className="btn" 
					href=""
					name={this.props.index}
					id={this.props.noteid}
					onClick={this.props.deleteNote}
					>
						X
					</a>
			</li>
		)
	}
}

export default OneNote;