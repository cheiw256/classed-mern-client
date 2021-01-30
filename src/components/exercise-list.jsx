import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Exercise from "./exercise";


const ExerciseList = () => {

    const [exerciseArray, setExercise] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => setExercise(response.data))
            .catch(err => console.log(err))}
            ,[])

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(response => { console.log(response.data)});
        setExercise(exerciseArray.filter(el => el._id !== id))
    }

    const exerciseList = () => {
        return exerciseArray.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id}/>;
        })};

    return(
        <div>
            <h3>Logged Exercises</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
                </table>
        </div>
    )
}

export default ExerciseList