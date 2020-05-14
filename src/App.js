import React from 'react';

import 'bootswatch/dist/slate/bootstrap.css';

import Routes from './routes';

import Navbar from './components/navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes />
            </div>
        </>
    );
}

export default App;
