import React, { useState } from 'react';
import Login from './Login';
import Registro from './Registro';
import 'bulma/css/bulma.min.css';

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
            <div className='columns is-mobile is-centered'>
                <div className='bd-notification is-primary'>
                    <div className='buttons'>
                        <button
                            className='button is-primary is-light'
                            onClick={onClicIniciar}
                        >
                            Iniciar sesión
                        </button>
                        <button
                            className='button is-link is-light'
                            onClick={onClicRegistro}
                        >
                            Registrar cuenta
                        </button>
                    </div>
                </div>
            </div>

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
