import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage'
import Container from './Container';
import PhotoContainer from './PhotoContainer'
import TestComponent from './Test'

const RouteComponent = () => {
    return <BrowserRouter>
            <Switch>
                    <Route exact path = '/' component = {App}/>
                    <Route exact path = '/:id' render = {TestComponent}/>
                    <Route component = {ErrorPage}/>
            </Switch>
        </BrowserRouter>
}

export default RouteComponent