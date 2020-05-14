import React from 'react';

export default function MenuLateral() {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h5>Principal</h5>
                <p>
                    <a href="#/invista-home">Inicio</a>
                </p>
            </li>
            <li className="list-group-item">
                <h5>Entradas</h5>
                <p>
                    <a href="#/invista-home/entradas/listar">Listar entradas</a>
                </p>
                <p>
                    <a href="#/invista-home/entradas/cadastrar">
                        Cadastrar entradas
                    </a>
                </p>
            </li>
            <li className="list-group-item">
                <h5>Saídas</h5>
                <p>
                    <a href="#/invista-home/saidas/listar">Listar saídas</a>
                </p>
                <p>
                    <a href="#/invista-home/saidas/cadastrar">
                        Cadastrar saídas
                    </a>
                </p>
            </li>
            <li className="list-group-item">
                <h5>Notas</h5>
                <p>
                    <a href="#/invista-home/notas/listar">Listar notas</a>
                </p>
            </li>
        </ul>
    );
}
