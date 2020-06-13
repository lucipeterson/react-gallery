import React from 'react';
import '../App.css';
import SearchForm from '../components/SearchForm';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';
import NotFound from './NotFound';

class Container extends React.Component {
    render() {
        return <div className="container">
            <SearchForm handleSearch = {this.props.handleSearch} />
            <Nav tags = {this.props.tags} tagSearch = {this.props.tagSearch} error = {this.error} /> 
            {this.props.data.length > 0 ? <PhotoContainer 
            error = {this.props.error} 
            data = {this.props.data} 
            /> : <NotFound searchExists = {this.props.searchExists} error = {this.props.error}/>}
        </div>
    }
}

export default Container;