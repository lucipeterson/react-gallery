import React from 'react';
import '../App.css';
import SearchForm from '../components/SearchForm';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import NotFound from './NotFound';

//CONTAINS THE IMAGE SEARCH, THE TAG BUTTONS, AND EITHER A PHOTO GALLERY OR A NOT FOUND PAGE IF THERE ARE NO RESULTS.
const Container = props => {
    console.log(props.data)
    //REMOVED CONDITIONAL STATEMENT PRECLUDING NOTFOUND, FOR TESTING PURPOSES
    return <div className="container">
        <SearchForm handleSearch = {props.handleSearch} searchQuery = {props.searchQuery}/>
        <Nav /> 
        <PhotoContainer 
        error = {props.error} 
        data = {props.data}
        sunsets = {props.sunsets}
        waterfalls = {props.waterfalls}
         />
        <NotFound searchExists = {props.searchExists} error = {props.error}/>
    </div>
}

export default Container;