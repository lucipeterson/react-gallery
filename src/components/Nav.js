import React, { PureComponent } from 'react';
import '../App.css';
import '../App.js';

class Nav extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {loading:true, error:false}
    }
    render() {return <nav class="main-nav">
                        <ul>
                            <li><a href='#'>Cats</a></li>
                            <li><a href='#'>Dogs</a></li>
                            <li><a href='#'>Computers</a></li>
                        </ul>
                    </nav>
                    }
}

export default Nav;