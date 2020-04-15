import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import PrintNota from './pages/PrintNota';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/print-nota" component={PrintNota} />
            </Switch>
        </BrowserRouter>
    );
}
