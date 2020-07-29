import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Pages/Index';
export const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}