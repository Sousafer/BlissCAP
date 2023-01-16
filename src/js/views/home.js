import React, {useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";


export const Home = () => {
	const [ isRetryVisible, setRetryVisible ] = useState(false)

	const showRetryButton = () => {
		setRetryVisible(true)
	}

	const navigate = useNavigate()

	fetch("https://private-anon-6f63385faf-blissrecruitmentapi.apiary-mock.com/health")
		.then(response => {
			if (response.ok == true) {
				console.log("Server is up and running. Response: ", response)
				navigate("/questions?filter=")
				return response.json();
			} else {
				showRetryButton()
				throw new Error("Server is down. Error: " + response.statusText);

			}
		})
		.catch(error => {
			console.log(error);
		});

	return (
		<div>
			{!isRetryVisible &&
				<div>
					<div className="loader"></div>
					<div className="loading"><h2>Loading...</h2></div>
				</div>
			}
			<div>
				{isRetryVisible &&
					<Link to="/">
						<button className="btn btn-outline-light rounded-pill" id="retry_button"> Retry Action... </button>
					</Link>
				}
			</div>
		</div>
	);
};