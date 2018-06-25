import React from "react";
import OneSaved from "../components/OneSaved";
import API from "../utils/API";


class SavedArticles extends React.Component {

	state = {
		savedArticles: []
	}

	componentDidMount() {
		this.getArticles();
	}

	getArticles = () => {
		API.getSavedArticles()
		.then( (dbArticles) =>  {
			let savedArticles = dbArticles.data;
			console.log(savedArticles);
			this.setState({
				savedArticles: savedArticles
			})
		})
	}

	deleteArticle = event => {
		event.preventDefault();

		let articleId = event.target.id;
		let articleIndex = event.target.name;

		API.deleteArticle(articleId)
		.then((res) => {
			//console.log("article deleted from db");
			let updatedArticles = this.state.savedArticles;
			updatedArticles.splice(articleIndex, 1)
			this.setState({
				savedArticles: updatedArticles
			});
		}).catch(function(err) {
			console.log(err);
		})
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
						this.state.savedArticles.map(article =>
						<OneSaved key={article._id}
						articleIndex={this.state.savedArticles.indexOf(article)}
		    		articleId={article._id}
		    		url={article.URL}
		    		headline={article.headline}
		    		pubDate={article.pubDate}
		    		summary={article.snippet}
		    		notes={article.notes}
		    		deleteArticle={this.deleteArticle}/>
					))}
			  </div>
			</div>
		);
	};
}

export default SavedArticles;