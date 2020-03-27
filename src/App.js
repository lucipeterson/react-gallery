import React from 'react';
import './App.css';
import Container from './components/Container';
import apiKey from './config.js';

let searchExists = false;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], error: null};
  }
  
  tagSearch = (e) => {  
    e.preventDefault();
    const searchQuery = e.target.id;
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if ((this.searchQuery) && (this.state.photos.length > 0)) {this.setState({photos: this.photos})}
    else this.setState({error: true})
    searchExists = true;
  }

  handleSearch = (e) => {  
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if ((this.searchQuery) && (this.state.photos.length > 0)) {this.setState({photos: this.photos})}
    else this.setState({error: true})
    searchExists = true;
  }
  
  // componentDidMount() {this.handleSearch()} **this doesn't work

  render() {
    return (<div><a href = '/'><h1>Image Search</h1></a><Container searchExists = {searchExists} tagSearch = {this.tagSearch} error = {this.state.error} handleSearch = {this.handleSearch} data = {this.state.photos}/></div>)
    }
}

export default App;
