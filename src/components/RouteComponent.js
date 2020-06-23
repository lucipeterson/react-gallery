import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage'
// // import TagSearch from './TagSearch';
// import PhotoContainer from './PhotoContainer';
import TagSearch from './TagSearch';

const RouteComponent = () => {
    return <BrowserRouter>
            <Switch>
                    <Route exact path = '/' component = {App}/>
                    <Route path = ':id' component = {TagSearch}/>
                    <Route component = {ErrorPage}/>
            </Switch>
        </BrowserRouter>
}

export default RouteComponent