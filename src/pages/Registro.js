import React, { useState } from 'react';

const Registro = () => {
    const [correo, setCorreo] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(correo, username, password);
        // const tokenUser = await loginUser({
        //     username,
        //     password,
        // });

        // if (tokenUser) {
        //     setToken(tokenUser);
        //     window.location.href = 'direccion';
        // }
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
                            onChange={(e) => setUsername(e.target.value)}
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
