import React, { PureComponent } from 'react';
import './App.css';

//IMPORT COMPONENTS
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import Container from './components/Container';

//MAIN APP COMPONENT
class App extends PureComponent {
  constructor(props) {    
    super(props);
    this.state = {
      loading: true,
      error: false,
      errorMessage: "",
      defaultSubject: "",
      defaultPhotos: [],
      catPhotos: [],
      dogPhotos: [],
      computerPhotos: [],
      photoSearch: []
    }
  }
  render() {return <Container />}
}

export default App;
