import React, { useContext, useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import useToken from '../util/useTokens';
import Direccion from './Direccion';
import Login from './Login';
import Registro from './Registro';

const RouterPage = () => {
    const { token, setToken } = useToken();

    // if (!token) {
    //     // return <Login setToken={setToken} />;
    // }

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/direccion' element={<Direccion />}></Route>
                    <Route path='/registro' element={<Registro />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default RouterPage;
