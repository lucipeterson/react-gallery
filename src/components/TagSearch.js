import React from 'react';
import '../App.css';
// import Photo from '../components/Photo';
import Container from './Container';
//CONFIG.JS ADDED TO .GITIGNORE
import apiKey from '../config.js';
// const TagSearch =  ({match}, props) => {
//     const tag = this.tags.find((tag) => {return match.params.tags === tag})
//     const results = props.data;
//     let displayPhotos = results.map(photo => (<Photo key = {photo.id} url = {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />)); 
//     return <div className = "photo-container">
//         {match.isExact && <><h3>{tag}</h3></>}{displayPhotos}</div>
// };

let searchExists = false;

class TagSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], error: null};
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="sunsets"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {this.setState({photos:responseData.photos.photo})})
    .catch(error => {console.log("Error fetching and parsing data", error)});
    if (this.state.photos.length > 0) {this.setState({photos: this.state.photos})}
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
export default TagSearch;