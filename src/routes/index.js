import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Inicio from '../pages/Inicio';
import Sair from '../pages/Sair';
import NotasInvista from '../pages/Notas/NotasInvista';
import Entradas from '../pages/Entradas';
import Saidas from '../pages/Saidas';
import EntradasListar from '../pages/Entradas/Listar';
import EntradasCadastrar from '../pages/Entradas/Cadastrar';
import SaidasCadastrar from '../pages/Saidas/Cadastrar';
import SaidasListar from '../pages/Saidas/Listar';

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/sair" component={Sair} isPrivate />
                <Route path="/inicio" component={Inicio} isPrivate />
                <Route path="/entradas" exact component={Entradas} isPrivate />
                <Route path="/saidas" exact component={Saidas} isPrivate />
                <Route
                    path="/entradas/listar"
                    exact
                    component={EntradasListar}
                    isPrivate
                />
                <Route
                    path="/entradas/cadastrar"
                    exact
                    component={EntradasCadastrar}
                    isPrivate
                />
                <Route
                    path="/saidas/listar"
                    exact
                    component={SaidasListar}
                    isPrivate
                />
                <Route
                    path="/saidas/cadastrar"
                    exact
                    component={SaidasCadastrar}
                    isPrivate
                />
                <Route path="/notas" component={NotasInvista} isPrivate />
            </Switch>
        </HashRouter>
    );
}
