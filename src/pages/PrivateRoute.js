import React from 'react';
import { Navigate } from 'react-router-dom';
import useLocalStorage from '../util/useLocalStorage';

const PrivateRoute = ({ children }) => {
    const [token, setToken] = useLocalStorage('', 'token');

    return token ? children : <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;
