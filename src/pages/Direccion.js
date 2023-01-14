import React, { useState } from 'react';
import '../css/basic.css';


const Direccion = () => {
    const [estado, setEstado] = useState();
    const [municipio, setMunicipio] = useState();
    const [cp, setCP] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const tokenUser = await loginUser({
        //     username,
        //     password,
        // });

        console.log(estado, municipio, cp);
        // if (tokenUser) {
        //     setToken(tokenUser);
        //     window.location.href = 'direccion';
        // }
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
