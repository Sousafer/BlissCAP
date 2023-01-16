import React, { useState, useEffect } from "react";
import { ListGroupItem } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Questions = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const filter = params.get("filter")
  const [ questions, setQuestions ] = useState()

  const questionList = [
    {id: 1, question: "whatfgdfgdf"},
    {id: 2, question: "whatfgdfgdf"}
  ]

  let searchTerm = ""
  const search = () => {
    navigate("/questions?filter=" + searchTerm)
  }

  const getInputValue = (event) => {
    searchTerm = event.target.value
  }


  useEffect(() => {
    fetch("https://private-anon-68d0a01e45-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=10&filter=" + filter)
    .then(response => {
      if (response.ok == true) {
        console.log("Server is up and running. Response: ", response);
        return response.json();
      } else {
        throw new Error("Server is down. Error: " + response.statusText);
      }
    })
    .then(
      (questions) => {
        setQuestions(questions)
      },
      (error) => {
        console.log(error)
      })
    .catch(error => {
      console.log(error);
    });
  })
  
    return (
      <div>
        <div>
          <div class="input-group mb-3">
            <input onChange={getInputValue} type="text" class="form-control rounded-pill" placeholder="search here" aria-label="Search" aria-describedby="basic-addon1"></input>
            <button onClick={() => search()} className="btn btn-primary rounded-pill" id="search"> Search </button>
          </div>
          {questions[0].question}
          <div>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>question</th>
                  <th>image_url</th>
                  <th>thumb_url</th>
                  <th>publi</th>
                </tr>
              </thead>
              <tbody>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};