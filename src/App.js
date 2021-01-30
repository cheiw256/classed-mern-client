import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

import NavBar from "./components/navbar";
import ExerciseList from "./components/exercise-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

const App = () => {
  return (
        <Router>
          <Container>
            <NavBar/>
            <br/>
            <Route path="/" exact component={ExerciseList}/>
            <Route path="/edit/:id" exact component={EditExercise}/>
            <Route path="/create" exact component={CreateExercise}/>
            <Route path="/user" exact component={CreateUser}/>
          </Container>
        </Router>
  );
}

export default App;
