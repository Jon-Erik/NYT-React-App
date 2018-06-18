import React from "react";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class WelcomeSearch extends React.Component {
	state = {
		query: "",
		startYear: "",
		endYear: "",
		searchResults: []
	};

	handleInputChange = event => {
		const  {name, value} = event.target;
		
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		let queryString = "&q=" + this.state.query;
		let startYearString = "&begin_date=" + this.state.startYear + "0101";
		let endYearString = "&end_date=" + this.state.endYear + "1231";

		if (this.state.query !== "") {
			if (this.state.startYear !== isNaN && 
				this.state.startYear.length === 4 &&
				this.state.endYear === "") {
					//console.log("real number 4 digits long, search only start year")
					this.searchForArticles(queryString + startYearString)
			} else if (this.state.endYear !== isNaN && 
				this.state.endYear.length === 4 &&
				this.state.startYear === "") {
					//console.log('real number 4 digits long, search only end year')
					this.searchForArticles(queryString + endYearString)
			} else if (this.state.endYear !== isNaN && 
				this.state.endYear.length === 4 &&
				this.state.startYear !== isNaN && 
				this.state.startYear.length === 4
				) {
					//console.log('real number 4 digits long, start and end years')
					this.searchForArticles(queryString + startYearString + endYearString)
			} else {
					console.log("please make sure your start year and/or end year are valid")
			}
		} else {
				alert("You must enter a search topic")
		};	
	}

	searchForArticles = params => {
		API.articleSearch(params)
			.then(res =>
				this.setState({
					searchResults: res.data.response.docs.slice(0, 5)
				})
			).catch(err => console.log(err))
	}

	saveArticle = () => {

	}
	
	render() {
		return (
			<div>
				<h3>Welcome to NYTimes Search</h3>
				<Search handleInputChange={this.handleInputChange}
								handleFormSubmit={this.handleFormSubmit}/>
				{!this.state.searchResults.length ? (
					<h3>No articles to display. Start a search above.</h3>
				) : (
					<SearchResults searchResults={this.state.searchResults}/>
				)}
			</div>
		);
	};
};

export default WelcomeSearch;