import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";



export const Home = () => {

	//const {store, actions } = useContext(Context);
	//const params = useParams();

	//let url = `https://private-bbbe9-blissrecruitmentapi.apiary-mock.com${params.uid}`;

	//const healthStore = store.health.filter(char => char.url == url);
	//useEffect(() => actions.health(url), []);

	fetch("https://private-anon-6f63385faf-blissrecruitmentapi.apiary-mock.com/health")
		.then(response => {
			if (response.ok) {
				console.log("Server is up and running. Response: ", response);
				//should return the list screen 
				return response.json();
			} else {
				throw new Error("Server is down. Error: " + response.statusText);
				//I should have a widget (retry action)
			}
		})
		.then(data => {
			//WHAT SHOULD I DO HERE? 
		})
		.catch(error => {
			console.log(error);
		});

	return (
		<div>
			<div class="loader"></div>
			<div className="loading"><h2>Loading...</h2></div>
		</div>
	);
};