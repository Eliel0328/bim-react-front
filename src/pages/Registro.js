import React, { useState } from 'react';
import axios from 'axios';
import useLocalStorage from '../util/useLocalStorage';
import { SERVER_URL } from '../util/const';

const client = axios.create({
    baseURL: SERVER_URL,
});

const Registro = () => {
    // eslint-disable-next-line
    const [token, setToken] = useLocalStorage('', 'token');
    // eslint-disable-next-line
    const [userId, setUserID] = useLocalStorage('', 'ID');

    const [correo, setCorreo] = useState();
    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();

    const [msgWrong, setMsgWrong] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { token, idUsuario } = await createNewUser({ correo, usuario, password });

        if (token) {
            setToken(token);
            setUserID(idUsuario);
            window.location.href = 'direccion';
        }
    };

    const createNewUser = async (props) => {
        try {
            const request = await client.post('/api/auth/register', props, {});
            console.log(request);
            if (request.status === 201) {
                setMsgWrong(false);
                const idUsuario = request.data.idUsuario;
                const token = request.headers.get('Authorization');
                setMsgWrong(false);
                return { token, idUsuario };
            } else {
                throw Error('Error');
            }
        } catch (error) {
            console.error(error);
            setMsgWrong(true);
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

                <div className={!msgWrong ? 'd-none' : 'card'} style={{ margin: 40 }}>
                    <div className='notification is-danger'>
                        Error: Posibles datos incorrectos o error de Conexión
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registro;
