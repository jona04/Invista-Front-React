import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Inicio from './pages/Inicio';
import PrintNota from './pages/PrintNota';
import InvistaHome from './pages/InvistaHome';
import TheBrindesHome from './pages/TheBrindesHome';
import NotasInvista from './pages/NotasInvista';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/inicio" exact component={Inicio} />
                <Route path="/invista-home" exact component={InvistaHome} />
                <Route
                    path="/the-brindes-home"
                    exact
                    component={TheBrindesHome}
                />
                <Route path="/notas-invista" component={NotasInvista} />
                <Route path="/print-nota" component={PrintNota} />
            </Switch>
        </BrowserRouter>
    );
}
