import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage'

const RouteComponent = () => {
    return <BrowserRouter>
            <Switch>
                    <Route exact path = '/' component = {App}/>
                    <Route path = '/sunsets' component = {App}/>
                    <Route path = '/waterfalls' component = {App}/>
                    <Route path = '/rainbows' component = {App}/>}
                    <Route component = {ErrorPage}/>
            </Switch>
        </BrowserRouter>
}

export default RouteComponent