import React from 'react';
import '../App.css';
import SearchForm from '../components/SearchForm';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import NotFound from './NotFound';

//CONTAINS THE IMAGE SEARCH, THE TAG BUTTONS, AND EITHER A PHOTO GALLERY OR A NOT FOUND PAGE IF THERE ARE NO RESULTS.
const Container = props => {
    console.log(props.data);
    return <div className="container">
        <SearchForm handleSearch = {props.handleSearch} />
        <Nav tags = {props.tags} tagSearch = {props.tagSearch} error = {props.error} /> 
        {props.data.length > 0 ? <PhotoContainer error = {props.error} data = {props.data} />
        : <NotFound searchExists = {props.searchExists} error = {props.error}/>}
    </div>
}

export default Container;