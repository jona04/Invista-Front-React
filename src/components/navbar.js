import React from 'react';
import NavBarItem from './navbaritem';

export default function NavBar() {
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
                    <NavBarItem label="Inicio" href="#/inicio" />
                    <NavBarItem label="Invista" href="#/invista-home" />
                    <NavBarItem label="The Brindes" href="#/the-brindes-home" />
                    <NavBarItem label="Sair" href="#/sair" />
                </ul>
            </div>
        </nav>
    );
}
