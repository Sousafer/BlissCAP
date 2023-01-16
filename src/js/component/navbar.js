import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar ">
			<div>
				<Link to="/">
					<button className="btn btn-light rounded-pill"> Bliss Challenge </button>
				</Link>
			</div>
		</nav>
	);
};
