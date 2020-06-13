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
    if ((searchQuery) && (this.state.photos.length > 0)) {this.setState({photos: this.state.photos.filter(photo =>photo.title.includes(searchQuery))})}
    searchExists = true;
  }

//RESULTS ARE NOT FILTERING. STATE IS NOT BEING SET CORRECTLY?? RESEARCH:"REACT, SET STATE, SEARCH NOT WORKING"
  handleSearch = (e) => {  
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    // fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
    // .then(response => response.json())
    // .then(responseData => {this.setState({photos:responseData.photos.photo})})
    // .catch(error => {console.log("Error fetching and parsing data", error)});
    debugger;
    if ((searchQuery) && (this.state.photos.length > 0)) {this.setState({photos: this.state.photos.filter(photo =>photo.title.includes(searchQuery))})}
    else this.setState({error: true})
    searchExists = true;
    console.log(searchQuery)
  }
  
  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=""&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if (this.state.photos.length > 0) {this.setState({photos: this.photos})}
    else this.setState({error: true});
  }

  render() {
    return (<div><a href = '/'><h1>Image Search</h1></a><Container 
    searchExists = {searchExists} 
    tagSearch = {this.tagSearch} 
    error = {this.state.error} 
    handleSearch = {this.handleSearch} 
    data = {this.state.photos}
    />
    </div>)
    }
}

export default App;
