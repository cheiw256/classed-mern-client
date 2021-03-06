import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const CreateUser = () => {

    const[username,setUserName] = useState('');
    let history = useHistory();
    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username,
        }
        console.log(user)
        axios.post('https://murmuring-harbor-37589.herokuapp.com/users/add', user)
            .then(res => console.log(res.data))
        setUserName('')
        history.push('/')
    }
    return(
        <div>
            <h3>Create New User</h3>
            <form onSubmit={OnSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input type="text" required className="form-control" value={username} onChange={onChangeUserName}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
      </div>
    )
}

export default CreateUser