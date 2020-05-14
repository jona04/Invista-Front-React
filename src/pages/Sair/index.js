import React from 'react';
import { Redirect } from 'react-router-dom';

function Sair() {
    localStorage.removeItem('token');
    return <Redirect to="/" />;
}

export default Sair;
