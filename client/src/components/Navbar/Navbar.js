import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
	<nav className="navbar">
	  <form className="form-inline">
	  	<h4 className="btn">
		  	<Link className="navbar-brand" to="/">
					New York Times Search
				</Link>
	  	</h4>
	  	<button className='btn'>
	  		<Link className="nav-link" to="/saved">
					Saved Articles
				</Link>
	  	</button>
	  	<button className='btn'>
	  		<Link className="nav-link" to="/">
					Home
				</Link>
	  	</button>
	  </form>
	</nav>
);

export default Navbar;