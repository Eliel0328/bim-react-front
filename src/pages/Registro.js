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
                <h1 className='title is-2'>Registro de Usuario</h1>

                <form onSubmit={handleSubmit}>
                    <div className='field'>
                        <label className='label'>Usuario</label>
                        <div className='control'>
                            <input
                                className='input is-link'
                                type='text'
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Correo</label>
                        <div className='control'>
                            <input
                                className='input is-link'
                                type='text'
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Contrasña</label>
                        <div className='control'>
                            <input
                                className='input is-link'
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button className='button is-link' type='submit'>
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Registro;
