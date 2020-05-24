import React from 'react';
import { Redirect } from 'react-router-dom';
// import { AuthContext } from '../../provedorAutenticacao';

function Sair() {
    // componentDidMount = () => {
    //     this.context.encerrarSessao();
    // };

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    return <Redirect to="/" />;
}

// Sair.contextType = AuthContext;

export default Sair;
