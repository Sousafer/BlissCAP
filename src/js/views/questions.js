import React, {useState} from "react";
import { ListGroupItem } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Questions = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const filter = params.get("filter")

  let searchTerm = ""
	const search = () => {
		navigate("/questions?filter=" + searchTerm)
	}

  const getInputValue = (event) => {
    searchTerm = event.target.value
  }

  fetch("https://private-anon-68d0a01e45-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=10&filter=" + filter)
    .then(response => {
      if (response.ok == true) {
        console.log("Server is up and running. Response: ", response);
        return response.json();
      } else {
        throw new Error("Server is down. Error: " + response.statusText);      }
    })
 //   .then(data) => { 
      

  //  }
    .catch(error => {
      console.log(error);
    });
  return (
    <div>
      <div>
        <div class="input-group mb-3">
          <input onChange={getInputValue} type="text" class="form-control rounded-pill" placeholder="search here" aria-label="Search" aria-describedby="basic-addon1"></input>
          <button onClick={() => search()} className="btn btn-primary rounded-pill" id="search"> Search </button>
        </div>
      </div>
      <li></li>
      <ListGroup>
        <ListGroup.Item>lista 1</ListGroup.Item>
      </ListGroup>
    </div>
  );
};