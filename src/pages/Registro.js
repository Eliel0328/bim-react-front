import React, { useState } from 'react';
import axios from 'axios';
import useLocalStorage from '../util/useLocalStorage';

const client = axios.create({
    baseURL: 'http://localhost:8080',
});

const Registro = () => {
    const [token, setToken] = useLocalStorage('', 'token');

    const [correo, setCorreo] = useState();
    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(correo, usuario, password);
        const result = await createNewUser({ correo, usuario, password });
        console.log(result);
    };

    const createNewUser = async (props) => {
        try {
            console.log(token);
            const request = await client.post('/api/usuario', props, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (request.status === 201) {
                console.log(request);
                return request.data;
            } else {
                throw Error('Error');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className='login-wrapper'>
                <h1>Registro de Usuario</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Correo</p>
                        <input type='text' onChange={(e) => setCorreo(e.target.value)} />
                    </label>
                    <label>
                        <p>Usuario</p>
                        <input
                            type='text'
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Contraseña</p>
                        <input
                            type='text'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div>
                        <button type='submit'>Actualizar</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Registro;
