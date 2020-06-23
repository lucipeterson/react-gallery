import React from 'react';
import './App.css';
import Container from './components/Container';
//CONFIG.JS ADDED TO .GITIGNORE
import apiKey from './config.js';

//VARIABLE THAT DETERMINES WHETHER A SEARCH HAS OCCURRED
let searchExists = false;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], error: null};
  }

  //SEARCHES FOR IMAGES MATCHING THE TITLE OF THE BUTTON THE USER CLICKS
  tagSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.id;
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if ((searchQuery) && (this.state.photos.length > 0)) {this.setState({photos: this.state.photos})}
    else this.setState({error: true})
    searchExists = true;
  }

  //SEARCHES FOR IMAGES MATCHING THE QUERY THE USER INPUTS
  handleSearch = (e) => {  
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if ((searchQuery) && (this.state.photos.length > 0)) {this.setState({photos: this.state.photos})}
    else this.setState({error: true})
    searchExists = true;
  }
  
  //DISPLAYS 24 OF THE MOST RECENT IMAGES UPLOADED TO FLICKR ON THE PAGE WHEN IT FIRST LOADS
  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=""&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if (this.state.photos.length > 0) {this.setState({photos: this.state.photos})}
    else this.setState({error: true});
  }

  //RENDERS CONTAINER.JS WHICH CONTAINS THE IMAGE SEARCH, THE TAG BUTTONS, AND EITHER A PHOTO GALLERY OR A "NOT FOUND PAGE" IF THERE ARE NO RESULTS.
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
