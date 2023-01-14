import React from 'react';
import RouterPage from './pages/RouterPage';
import 'antd/dist/antd.css';
import './App.css';

const App = () => {
    return (
        <div className='wrapper'>
            <h1>Application</h1>
            <RouterPage></RouterPage>
        </div>
    );
};

export default App;
