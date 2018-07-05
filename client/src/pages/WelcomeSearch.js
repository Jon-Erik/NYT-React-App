import React from "react";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import ErrorModal from "../components/ErrorModal";
import "./WelcomeSearch.css";
//import * as ReactBootstrap from "react-bootstrap";

class WelcomeSearch extends React.Component {
	state = {
		query: "",
		startYear: "",
		endYear: "",
		searchResults: [],
		errorMessage: "",
		show: false,
	};

	handleInputChange = event => {
		const  {name, value} = event.target;
		
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		//creates the query string for the nytimes api call
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
					// console.log("please make sure your start year and/or end year are valid")
					this.setState({
						errorMessage: "Please ensure your start year and/or end year are valid."
					})
					this.handleShow();
			}
		} else {
				//alert("You must enter a search topic")
				this.setState({
					errorMessage: "You must enter a search topic."
				})
				this.handleShow();
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
	
	render() {
		return (
			<div>
				<Search handleInputChange={this.handleInputChange}
								handleFormSubmit={this.handleFormSubmit}/>
				{!this.state.searchResults.length ? (
					<h3 className="no-articles-msg"><i>No articles to display. Start a search above.</i></h3>
				) : (
					<SearchResults searchResults={this.state.searchResults}/>
				)}
				<ErrorModal errorMessage={this.state.errorMessage}
										handleClose={this.handleClose}
										showState={this.state.show}/>
			</div>
		);
	};
};

export default WelcomeSearch;