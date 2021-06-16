import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Detail from './Detail';
import Tvshow from './Tvshow';

const ComponentRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Tvshow" component={Tvshow} />
            <Route exact path="/Detail" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    );
};
export default ComponentRouter;
