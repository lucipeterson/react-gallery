import React from 'react';
import '../App.css';
import Container from './Container';
//CONFIG.JS ADDED TO .GITIGNORE
import apiKey from '../config.js';
import Nav from './Nav';

let searchExists = false;

class TagSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], sunsets: [], waterfalls: [], rainbows: [], error: null};
  }

  componentDidMount() {
    // fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="sunsets"&per_page=24&format=json&nojsoncallback=1`)
    // .then(response => response.json())
    // .then(responseData => {this.setState({photos:responseData.photos.photo})})
    // .catch(error => {console.log("Error fetching and parsing data", error)});
    // if (this.state.photos.length > 0) {this.setState({sunsets: this.state.photos})}
    // else this.setState({error: true});

    // fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="waterfalls"&per_page=24&format=json&nojsoncallback=1`)
    // .then(response => response.json())
    // .then(responseData => {this.setState({photos:responseData.photos.photo})})
    // .catch(error => {console.log("Error fetching and parsing data", error)});
    // if (this.state.photos.length > 0) {this.setState({waterfalls: this.state.photos})}
    // else this.setState({error: true});

    // fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="rainbows"&per_page=24&format=json&nojsoncallback=1`)
    // .then(response => response.json())
    // .then(responseData => {this.setState({photos:responseData.photos.photo})})
    // .catch(error => {console.log("Error fetching and parsing data", error)});
    // if (this.state.photos.length > 0) {this.setState({rainbows: this.state.photos})}
    // else this.setState({error: true});
  }

  render() {
    return (<div><a href = '/'><h1>Image Search</h1></a><Container 
    searchExists = {searchExists} 
    error = {this.state.error} 
    handleSearch = {this.handleSearch} 
    />
    </div>)
    }
}
export default TagSearch;