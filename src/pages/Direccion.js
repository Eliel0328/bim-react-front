import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/basic.css';
import useLocalStorage from '../util/useLocalStorage';

const client = axios.create({
    baseURL: 'http://localhost:8080',
});

const Direccion = () => {
    const [token, setToken] = useLocalStorage('', 'token');
    const [userId, setUserID] = useLocalStorage('', 'ID');

    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [cp, setCP] = useState('');
    const [idUsuarioDireccion, setIDUsuarioDireccion] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateDireccion({
            idUsuarioDireccion,
            estado,
            municipio,
            cp,
            usuario: {
                idUsuario: userId,
            },
        });
    };

    useEffect(() => {
        getDireccion();
    }, []);

    const getDireccion = async () => {
        try {
            const request = await client.get(`/api/direccionUsuario/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (request.status === 200) {
                setEstado(request.data.estado);
                setMunicipio(request.data.municipio);
                setCP(request.data.cp);
                setIDUsuarioDireccion(request.data.idUsuarioDireccion);
                return request.data;
            } else {
                throw Error('Error');
            }
        } catch (error) {
            console.error(error);
            if (error.response.status === 401) {
                setToken('');
                setUserID('');
            }
        }
    };

    const updateDireccion = async (props) => {
        try {
            const request = await client.put('/api/direccionUsuario', props, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (request.status === 200) {
                console.log(request);
            } else {
                throw Error('Error');
            }
        } catch (error) {
            console.error(error);
            if (error.response.status === 401) {
                setToken('');
                setUserID('');
            }
        }
    };

    return (
        <>
            <div className='login-wrapper'>
                <h1>Direccion del usuario</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Estado</p>
                        <input
                            type='text'
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Municipio</p>
                        <input
                            type='text'
                            value={municipio}
                            onChange={(e) => setMunicipio(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Codigo Postal</p>
                        <input
                            type='text'
                            value={cp}
                            onChange={(e) => setCP(e.target.value)}
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

export default Direccion;
