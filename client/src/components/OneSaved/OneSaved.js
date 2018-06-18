import React from "react";
import "./OneSaved.css";

const OneSaved = props => (
		
		<div className="card">
		  <div className="card-body">
		    <a href={props.url} ><h5 className="card-title">{props.headline}</h5></a>
		    <p className="card-text">Published: {props.pubDate.substr(0, 10)}</p>
		    <p className="card-text">{props.summary}</p>
		    {!props.notes.length ? (
		    		<p>No notes to display</p>
		    	) : (
		    		<ul>
		    		{props.notes.map(note => (
		    			<li>{note}</li>
		    		))}
		    		</ul>
		    	)}
		    <p className="card-text">{props.summary}</p>
		    <a href="" className="btn">Delete</a>
		  </div>
		</div>
);

export default OneSaved;