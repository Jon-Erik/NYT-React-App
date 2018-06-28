import React from "react";
import "./SearchResults.css";
import OneResult from "../OneResult";

const SearchResults = props => (
	<div className="card results-box">
  	<div className="card-header results-header">
    	<h3>Search Results</h3>
	  </div>
	  <div className="card-body">
  		{props.searchResults.map(article => (
	    	<OneResult key={article._id}
	    		url={article.web_url}
	    		headline={article.headline.main}
	    		pubDate={article.pub_date}
	    		summary={article.snippet}/>
	    ))}
	  </div>
	</div>
);

export default SearchResults;