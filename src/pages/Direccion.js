import React, { useState } from 'react';
import axios from 'axios';
import '../css/basic.css';
import useLocalStorage from '../util/useLocalStorage';

const client = axios.create({
    baseURL: 'http://localhost:8080',
});

const Direccion = () => {
    const [token, setToken] = useLocalStorage('', 'token');

    const [estado, setEstado] = useState();
    const [municipio, setMunicipio] = useState();
    const [cp, setCP] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(estado, municipio, cp);
        const result = await updateDireccion({ estado, municipio, cp });
        console.log(result);
    };

    const updateDireccion = async (props) => {
        try {
            console.log(token);
            const request = await client.post('/api/direccionUsuario', props, {
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
                <h1>Direccion del usuario</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Estado</p>
                        <input type='text' onChange={(e) => setEstado(e.target.value)} />
                    </label>
                    <label>
                        <p>Municipio</p>
                        <input
                            type='text'
                            onChange={(e) => setMunicipio(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Codigo Postal</p>
                        <input type='text' onChange={(e) => setCP(e.target.value)} />
                    </label>
                    <div>
                        <button type='submit'>Actualizar</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Direccion;
