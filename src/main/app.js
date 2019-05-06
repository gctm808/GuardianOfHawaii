import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../css/styles.css';
import Landing from './landing';

const App = () => {
    return (
        <BrowserRouter>
            <Landing />
        </BrowserRouter>
    );
};

export default App;