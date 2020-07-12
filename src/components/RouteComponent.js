import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Container from './Container';
import TagSearch from './TagSearch';

const RouteComponent = (props) => {
    return <BrowserRouter>
            <Switch>
                    <Route exact path = '/' component = {App}/>
                    <Route path = '/:id' render = {(props)=><Container data = {props.sunsets}/>}/>
                    <Route component = {ErrorPage}/>
            </Switch>
        </BrowserRouter>
}

export default RouteComponent