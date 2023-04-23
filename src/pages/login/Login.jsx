import React from 'react'
import "./login.scss";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
        navigate("/");
    }
    return (
        <div className='login'>
            <h1>Login</h1>

            <div className="loginForm">

                <input type="text" placeholder='Username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />

                <input type="password" placeholder='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login