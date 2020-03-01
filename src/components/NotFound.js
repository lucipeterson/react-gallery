import React, { PureComponent } from 'react';
import '../App.css';
import '../App.js';

class NotFound extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {loading:true, error:false}
    }
    render() {return <li class="not-found">
                        <h3>No Results Found</h3>
                        <p>You search did not return any results. Please try again.</p>
                    </li>}
}

export default NotFound;