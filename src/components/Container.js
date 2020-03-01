import React, { PureComponent } from 'react';
import '../App.css';
import '../App.js';
import SearchForm from '../components/SearchForm';
import Nav from '../components/Nav';
import PhotoContainer from '../components/PhotoContainer';

class Container extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {loading:true, error:false}
    }
    render() {return <div class="container">
                        <SearchForm />
                        <Nav />
                        <PhotoContainer />
                    </div>   
                        }
}

export default Container;