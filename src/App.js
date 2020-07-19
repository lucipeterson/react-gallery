import React from 'react';
import './App.css';
import Container from './components/Container';
//CONFIG.JS ADDED TO .GITIGNORE
import apiKey from './config.js';
import RouteComponent from './components/RouteComponent';

//VARIABLE THAT STORES INFORMATION ON WHETHER A SEARCH HAS OCCURRED, USED TO DETERMINE WHETHER TO DISPLAY NOTFOUND COMPONENT
let searchExists = false;

//MAIN APP COMPONENT
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], sunsets: [], waterfalls: [], rainbows: [], searchQuery: [], error: null};
  }

  //SEARCHES FOR IMAGES MATCHING THE QUERY THE USER INPUTS
  handleSearch = (e) => {  
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if ((searchQuery) && (this.state.photos.length > 0)) {this.setState({photos: this.state.photos, searchQuery: {searchQuery}})}
    else this.setState({error: true});
    searchExists = true
  }
  
  componentDidMount() {
    const that = this;
    Promise.all([
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="nature"&per_page=24&format=json&nojsoncallback=1`),
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="sunsets"&per_page=24&format=json&nojsoncallback=1`),
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="waterfalls"&per_page=24&format=json&nojsoncallback=1`),
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="rainbows"&per_page=24&format=json&nojsoncallback=1`)])
      .then(function (responses) {
        // GET A JSON OBJECT FROM EACH OF THE RESPONSES
        return Promise.all(responses.map(function (response) {
          return response.json()
        }));
      }).then(function (data) {
        // SET STATE WITH FETCHED DATA IF THERE IS ANY, IF NOT SET ERROR STATE TO "TRUE"
        if (this.state.rainbows.length > 0) {
          that.setState({
            photos:data[0].photos.photo,
            sunsets:data[1].photos.photo,
            waterfalls:data[2].photos.photo,
            rainbows:data[3].photos.photo
          })} else this.setState({error: true})
      }).catch(function (error) {
        // IF THERE IS AN ERROR, LOG IT
        console.log("Error fetching and parsing data");
      });
  }

  //RENDERS CONTAINER.JS WHICH CONTAINS THE IMAGE SEARCH, THE TAG BUTTONS, AND EITHER A PHOTO GALLERY OR A "NOT FOUND PAGE" IF THERE ARE NO RESULTS.
  render() {
    console.log(this.props.match);
    return (<div>
    <a href = '/'><h1>Image Search</h1>
    </a><Container 
    searchExists = {searchExists} 
    searchQuery = {this.state.searchQuery}
    error = {this.state.error} 
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
