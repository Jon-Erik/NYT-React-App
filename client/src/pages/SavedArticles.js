import React from "react";
import OneSaved from "../components/OneSaved"

class SavedArticles extends React.Component {

	state = {
		savedArticles: []
	}

	render() {
		return (
			<div className="card">
			  <div className="card-header">
			    <h3>Saved Articles and Notes</h3>
			  </div>
			  <div className="card-body">
			    {!this.state.savedArticles.length ? (
						<h6>No articles to display. Saved articles from searches will appear here.</h6>
					) : (
						this.state.SavedArticles.map(article =>
						<OneSaved key={article._id}
		    		url={article.web_url}
		    		headline={article.headline.main}
		    		pubDate={article.pub_date}
		    		summary={article.snippet}/>
					))}
			  </div>
			</div>
		);
	};
}

export default SavedArticles;