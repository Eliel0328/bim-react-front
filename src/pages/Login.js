import React, { useState } from 'react';
import '../css/basic.css';
import axios from 'axios';
import useLocalStorage from '../util/useLocalStorage';

const client = axios.create({
    baseURL: 'http://localhost:8080',
});

const loginUser = async (props) => {
    try {
        const request = await client.post('/api/auth/login', props);
        if (request.status === 200) {
            const idUsuario = request.data.idUsuario;
            const token = request.headers.get('Authorization');
            return { token, idUsuario };
        } else {
            throw Error('Datos Invalidos');
        }
    } catch (error) {
        console.error(error);
    }
};

const Login = () => {
    const [token, setToken] = useLocalStorage('', 'token');
    const [userId, setUserID] = useLocalStorage('', 'ID');

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { token, idUsuario } = await loginUser({
            username,
            password,
        });

        if (token) {
            setToken(token);
            setUserID(idUsuario);
            window.location.href = 'direccion';
        }
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
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
