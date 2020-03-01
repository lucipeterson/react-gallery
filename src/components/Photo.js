import React, { PureComponent } from 'react';
import '../App.css';
import '../App.js';

class Photo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {loading:true, error:false}
    }
    render() {return <li>
                        <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
                    </li>}
}

export default Photo;