import React from 'react';
import '../App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
    <div>
        <BrowserRouter>
            <nav className = "main-nav">
                <ul>
                    <li><NavLink id = 'sunsets' to = '/sunsets'>Sunsets</NavLink></li>
                    <li><NavLink id = 'waterfalls' to ='/waterfalls'>Waterfalls</NavLink></li>
                    <li><NavLink id = 'rainbows' to ='/rainbows'>Rainbows</NavLink></li>
                </ul>
            </nav>
        </BrowserRouter>
    </div>)}

export default Nav;