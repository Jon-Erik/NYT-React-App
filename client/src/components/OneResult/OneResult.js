import React from "react";
import "./OneResult.css";
import API from "../../utils/API";
import SaveModal from "../SaveModal";

class OneResult extends React.Component {

	state = {
		show: false
	}

	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.setState({show: false});
	}

	handleShow() {
		this.setState({show: true})
	}

	saveArticle = event => {
		event.preventDefault();
		
		API.saveArticle({
			headline: this.props.headline,
			pubDate: this.props.pubDate,
			snippet: this.props.summary,
			URL: this.props.url
		}).then((res) => {
			//console.log("article saved");
			this.handleShow();
		}).catch(function(err) {
			console.log(err);
		})
	}

	render() {
		return (
			<div>
				<div className="card result-card">
				  <div className="card-body">
				    <a href={this.props.url} ><h5 className="card-title result-title">{this.props.headline}</h5></a>
				    <p className="card-text result-text">Published: {this.props.pubDate.substr(0, 10)}</p>
				    <p className="card-text result-text">{this.props.summary}</p>
				    <a href="" className="btn save-article-btn" onClick={this.saveArticle}>Save</a>
				  </div>
				</div>
				<SaveModal handleClose={this.handleClose}
									 showState={this.state.show}
									 handleShow={this.handleShow}/>
			</div>
		)
	}
}

export default OneResult;