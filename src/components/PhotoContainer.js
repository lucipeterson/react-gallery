import React, { PureComponent } from 'react';
import '../App.css';
import '../App.js';
import Photo from '../components/Photo';
import NotFound from '../components/NotFound';

class PhotoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {loading:true, error:false}
    }
    render() {return <div class="photo-container">
                        <h2>Results</h2>
                        <ul><Photo /><Photo /><Photo /><Photo /><NotFound />
                        </ul>
                        </div>       
                        }
}

export default PhotoContainer;