import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from '../util/useLocalStorage';
import Direccion from './Direccion';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

const RouterPage = () => {
    // eslint-disable-next-line
    const [token, setToken] = useLocalStorage('', 'token');

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/home'
                        element={
                            !token ? <Home /> : <Navigate to='/direccion'></Navigate>
                        }
                    ></Route>
                    <Route
                        path='/direccion'
                        element={
                            <PrivateRoute>
                                <Direccion />
                            </PrivateRoute>
                        }
                    ></Route>
                    <Route
                        path='/*'
                        element={
                            !token ? (
                                <Navigate to='/home' />
                            ) : (
                                <Navigate to='/direccion'></Navigate>
                            )
                        }
                    ></Route>
                </Routes>
            </Router>
        </>
    );
};

export default RouterPage;
