import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
	<nav className="navbar navbar-light bg-light">
		<Link className="navbar-brand" to="/">
			NY Times Search
		</Link>
	  <ul className="navbar-text">
	  	<li className={
	  		window.location.pathname === "/" 
	  			? "nav-item active"
	  			: "nav-item"}>
	  		<Link className="nav-link" to="/saved">
					Saved Articles
				</Link>
	  	</li>
	  </ul>
	</nav>
);

export default Navbar;