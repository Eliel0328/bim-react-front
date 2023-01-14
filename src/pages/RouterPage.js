import React, { useContext, useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import useLocalStorage from '../util/useLocalStorage';
import Direccion from './Direccion';
import Login from './Login';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Registro from './Registro';

const RouterPage = () => {
    const [token, setToken] = useLocalStorage('', 'token');

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route
                        path='/direccion'
                        element={
                            <PrivateRoute>
                                <Direccion />
                            </PrivateRoute>
                        }
                    ></Route>
                    <Route
                        path='/registro'
                        element={
                            <PrivateRoute>
                                <Registro />
                            </PrivateRoute>
                        }
                    ></Route>
                    <Route
                        path='/*'
                        element={
                            <PrivateRoute>
                                <NotFound />
                            </PrivateRoute>
                        }
                    ></Route>
                </Routes>
            </Router>
        </>
    );
};

export default RouterPage;
