import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap';
import { useHistory } from "react-router-dom";


const CreateExercise = () => {
    const[username,setUserName] = useState('');
    const[description,setDescription] = useState('');
    const[duration,setDuration] = useState(0);
    const[date,setDate] = useState(new Date());
    const[users,setUsers] = useState([]);
    let history = useHistory();

    useEffect(() => {
        console.log('mounted');
        axios.get('https://murmuring-harbor-37589.herokuapp.com/users/')
            .then(response => {
                if(response.data.length > 0){
                    setUsers(response.data.map(user => user.username))
                    setUserName(response.data[0].username)
                }
            })
    },[])

    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    }
    const onChangeDate = (date) => {
        setDate(date)
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);
        axios.post('https://murmuring-harbor-37589.herokuapp.com/exercises/add',exercise)
            .then(res => console.log(res.data))
        history.push('/')

    }

    return(
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={OnSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <select required className="form-control" value={username} onChange={onChangeUserName}>
                        {users.map(user => (
                            <option key={user} value={user}>{user}</option>))}
                    </select>
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text" required className="form-control" value={description} onChange={onChangeDescription}/>
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text" className="form-control" value={duration} onChange={onChangeDuration}/>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker selected={date} onChange={onChangeDate}/>
                    </div>
                </div>
        
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
      </div>
    );
}

export default CreateExercise