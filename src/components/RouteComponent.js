import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage'
import TagSearch from './TagSearch';
import PhotoContainer from './PhotoContainer';

const RouteComponent = () => {
    return <BrowserRouter>
            <Switch>
                    <Route exact path = '/' component = {App}/>
                    <Route path = ':tag' component = {PhotoContainer}/>
                    <Route component = {ErrorPage}/>
            </Switch>
        </BrowserRouter>
}

export default RouteComponent