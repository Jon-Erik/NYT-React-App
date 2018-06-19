import React from "react";
import "./OneResult.css";
import API from "../../utils/API";

class OneResult extends React.Component {

	saveArticle = event => {
		event.preventDefault();
		
		API.saveArticle({
			headline: this.props.headline,
			pubDate: this.props.pubDate,
			snippet: this.props.summary,
			URL: this.props.url
		}).then(function(res) {
			console.log("article saved");
		}).catch(function(err) {
			console.log(err);
		})
	}

	render() {
		return (
			<div className="card">
			  <div className="card-body">
			    <a href={this.props.url} ><h5 className="card-title">{this.props.headline}</h5></a>
			    <p className="card-text">Published: {this.props.pubDate.substr(0, 10)}</p>
			    <p className="card-text">{this.props.summary}</p>
			    <a href="" className="btn" onClick={this.saveArticle}>Save</a>
			  </div>
			</div>
		)
	}
}

export default OneResult;