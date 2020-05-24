import React from 'react';
// import 'bootswatch/dist/slate/bootstrap.css';

// import ProvedorAutenticacao from './provedorAutenticacao';

import Routes from './routes';

import Navbar from './components/navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Routes />
            </div>
        </>
    );
}

export default App;
