import React from 'react';
import NavBarItem from './navbaritem';
import ApiService from '../services/api';

export default function NavBar() {
    const isAutenticado = () => {
        console.log(ApiService.isAutenticado);
        return ApiService.isAutenticado;
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#/inicio">
                Invista
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavBarItem
                        render={isAutenticado()}
                        label="Inicio"
                        href="#/inicio"
                    />
                    <NavBarItem
                        render={isAutenticado()}
                        label="Entradas"
                        href="#/entradas"
                    />
                    <NavBarItem
                        render={isAutenticado()}
                        label="Saídas"
                        href="#/saidas"
                    />
                    <NavBarItem
                        render={isAutenticado()}
                        label="Sair"
                        href="#/sair"
                    />
                </ul>
            </div>
        </nav>
    );
}
