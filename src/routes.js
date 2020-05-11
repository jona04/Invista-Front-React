import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import PrintNota from './pages/PrintNota';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                {/* <Route path="/inicio" component={Inicio} /> */}
                <Route path="/print-nota" component={PrintNota} />
            </Switch>
        </BrowserRouter>
    );
}
