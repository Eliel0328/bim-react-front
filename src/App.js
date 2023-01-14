import React from 'react';
import RouterPage from './pages/RouterPage';
import 'bulma/css/bulma.min.css';
import './App.css';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='columns is-mobile is-centered'>
                <div className='bd-notification is-primary'>
                    <h1 className='title is-1'>Prueba BIM</h1>
                </div>
            </div>
            <RouterPage></RouterPage>
        </div>
    );
};

export default App;
