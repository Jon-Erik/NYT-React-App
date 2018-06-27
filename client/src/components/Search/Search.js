import React from "react";
import "./Search.css";

const Search = props => (
	<div className="card search-box">
		<div className="card-header">
			<h3>Search New York Times Articles Here</h3>
		</div>
		<div className="card-body">
			<form>
				<div className="form-group">
			    <label htmlFor="topic">Topic</label>
			    <input 
			    	type="text" 
			    	className="form-control" 
			    	name="query"
			    	onChange={props.handleInputChange}
			    	placeholder="Enter topic here"/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="start-year">Start Year</label>
			    <input 
			    	className="form-control"
			    	name="startYear"
			    	onChange={props.handleInputChange} 
			    	placeholder="Ex: 1990"/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="end-year">End Year</label>
			    <input 
			    	className="form-control"
			    	name="endYear"
			    	onChange={props.handleInputChange}
			    	placeholder="Ex: 2005"/>
			  </div>
			  <button className="btn search-btn" onClick={props.handleFormSubmit}>Search</button>
			</form>
		</div>
	</div>
);

export default Search;