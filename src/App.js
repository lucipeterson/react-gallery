import React, { PureComponent } from 'react';
import './App.css';
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
