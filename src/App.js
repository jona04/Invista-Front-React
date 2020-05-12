import React from 'react';

import 'bootswatch/dist/superhero/bootstrap.css';

import Routes from './routes';

import Navbar from './components/navbar';

function App() {
    return (
        <>
            <Navbar />
            <Routes />
        </>
    );
}

export default App;
