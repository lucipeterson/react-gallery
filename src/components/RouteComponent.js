import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

const RouteComponent = () => {
    return <BrowserRouter>
            <Switch>
                    <Route exact path = '/' component = {App}/>
                    <Route path = '/sunsets' component = {App}/>
                    <Route path = '/waterfalls' component = {App}/>
                    <Route path = '/rainbows' component = {App}/>}
                    <Route component = {NotFound}/>
            </Switch>
        </BrowserRouter>
}

export default RouteComponent