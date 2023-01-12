import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Bliss Challenge</span>
			</Link>
			<div className="ml-auto">
				<Link to="/list">
					<button className="btn btn-primary"> List > </button>
				</Link>
				<Link to="/Retry">
					<button className="btn btn-primary"> Retry > </button>
				</Link>
			</div>
		</nav>
	);
};
