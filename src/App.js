import React from 'react';
import './App.css';
import Container from './components/Container';
//CONFIG.JS ADDED TO .GITIGNORE
import apiKey from './config.js';

//VARIABLE THAT STORES INFORMATION ON WHETHER A SEARCH HAS OCCURRED, USED TO DETERMINE WHETHER TO DISPLAY NOTFOUND COMPONENT
let searchExists = false;

//MAIN APP COMPONENT
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], sunsets: [], waterfalls: [], rainbows: [], searchQuery: [], error: null};
  }
  
  //RUNS WHEN USER CLICKS ON A TAG BUTTON, ASSIGNS THE IMAGES MATCHING THAT TAG TO THE PHOTOS ARRAY, TRIGGERING THE RE-RENDERING OF THE APP WITH NEW IMAGES
  // tagsearch = (e) => {
  //   e.preventDefault(); 
  //   this.setState({searchQuery: e.target.id}); 
  //   this.setState({photos: this.state.searchQuery})
  // }

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
  
  //DISPLAYS 24 OF THE MOST RECENT "NATURE" IMAGES UPLOADED TO FLICKR ON THE PAGE WHEN IT FIRST LOADS, USED "NATURE" TO AVOID INAPPROPRIATE PHOTOS APPEARING
  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="nature"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if (this.state.photos.length > 0) {this.setState({photos: this.state.photos})}
    else this.setState({error: true});

    //COLLECTS 24 SUNSETS PHOTOS AND STORES THEM IN THE SUNSETS ARRAY
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="sunsets"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({sunsets:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if (this.state.sunsets.length > 0) {this.setState({sunsets: this.state.sunsets})}
    else this.setState({error: true});

    //COLLECTS 24 WATERFALL PHOTOS AND STORES THEM IN THE WATERFALLS ARRAY
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="waterfalls"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({waterfalls:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if (this.state.waterfalls.length > 0) {this.setState({waterfalls: this.state.waterfalls})}
    else this.setState({error: true});

    //COLLECTS 24 RAINBOW PHOTOS AND STORES THEM IN THE RAINBOWS ARRAY
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="rainbows"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({rainbows:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if (this.state.rainbows.length > 0) {this.setState({rainbows: this.state.rainbows})}
    else this.setState({error: true});
  }

  //RENDERS CONTAINER.JS WHICH CONTAINS THE IMAGE SEARCH, THE TAG BUTTONS, AND EITHER A PHOTO GALLERY OR A "NOT FOUND PAGE" IF THERE ARE NO RESULTS.
  render() {
    console.log(this.state.sunsets);
    return (<div><a href = '/'><h1>Image Search</h1></a><Container 
    searchExists = {searchExists} 
    error = {this.state.error} 
    tagsearch = {this.tagsearch}
    handleSearch = {this.handleSearch} 
    data = {this.state.photos}
    sunsets = {this.state.sunsets}
    waterfalls = {this.state.waterfalls}
    rainbows = {this.state.rainbows}
    />
    </div>)
    }
}

export default App;
