import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar ">
			<Link class="navbar" to="/">
				<h7 className="navbar">Bliss Challenge</h7>
			</Link>
			<div className="ml-auto">
				<Link to="/questions">
					<button className="btn btn-light rounded-pill"> List > </button>
				</Link>
				<Link to="/Retry">
					<button className="btn btn-light rounded-pill"> Retry > </button>
				</Link>
			</div>
		</nav>
	);
};
