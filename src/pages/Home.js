import React, { useState } from 'react';
import Login from './Login';
import Registro from './Registro';

const Home = () => {
    const [visible, setVisible] = useState(true);

    const onClicIniciar = () => {
        setVisible(true);
    };

    const onClicRegistro = () => {
        setVisible(false);
    };

    return (
        <>
            <button onClick={onClicIniciar}>Iniciar sesión</button>
            <button onClick={onClicRegistro}>Registrar cuenta</button>

            <div className={visible ? '' : 'd-none'}>
                <Login />
            </div>
            <div className={!visible ? '' : 'd-none'}>
                <Registro />
            </div>
        </>
    );
};

export default Home;
