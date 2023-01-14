import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/basic.css';
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:8080',
});

const loginUser = async (props) => {
    const request = await client.post('/api/auth/login', props);
    const authValue = request.headers.get('Authorization');
    return authValue;
};

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password,
        });

        setToken(token);
    };

    return (
        <>
            <div className='login-wrapper'>
                <h1>Please Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input
                            type='text'
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;
