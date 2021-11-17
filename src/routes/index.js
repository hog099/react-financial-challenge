import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import Home from '../pages/home/index';
import Profile from '../pages/profile/index';

function RoutesMap() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />

                {/* <Redirect from='*' to='/' /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default RoutesMap;