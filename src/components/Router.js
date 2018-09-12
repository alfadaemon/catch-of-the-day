import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StoragePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={StoragePicker} />
            <Route path='/store/:storeId' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;