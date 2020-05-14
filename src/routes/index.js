import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Inicio from '../pages/Inicio';
import Sair from '../pages/Sair';
import InvistaHome from '../pages/InvistaHome';
import InvistaHomeEntradasCadastrar from '../pages/InvistaHome/Entradas/Cadastrar';
import InvistaHomeEntradasListar from '../pages/InvistaHome/Entradas/Listar';
import InvistaHomeSaidasCadastrar from '../pages/InvistaHome/Saidas/Cadastrar';
import InvistaHomeSaidasListar from '../pages/InvistaHome/Saidas/Listar';
import InvistaHomeNotasListar from '../pages/InvistaHome/Notas/NotasInvista';
import TheBrindesHome from '../pages/TheBrindesHome';

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/sair" component={Sair} isPrivate />
                <Route path="/inicio" component={Inicio} isPrivate />
                <Route
                    path="/invista-home"
                    exact
                    component={InvistaHome}
                    isPrivate
                />
                <Route
                    path="/invista-home/entradas/cadastrar"
                    component={InvistaHomeEntradasCadastrar}
                    isPrivate
                />
                <Route
                    path="/invista-home/entradas/listar"
                    component={InvistaHomeEntradasListar}
                    isPrivate
                />
                <Route
                    path="/invista-home/saidas/cadastrar"
                    component={InvistaHomeSaidasCadastrar}
                    isPrivate
                />
                <Route
                    path="/invista-home/saidas/listar"
                    component={InvistaHomeSaidasListar}
                    isPrivate
                />
                <Route
                    path="/invista-home/notas/listar"
                    component={InvistaHomeNotasListar}
                    isPrivate
                />
                <Route
                    path="/the-brindes-home"
                    component={TheBrindesHome}
                    isPrivate
                />
            </Switch>
        </HashRouter>
    );
}
