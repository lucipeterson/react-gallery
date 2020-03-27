import React from 'react';
import '../App.css';
import '../App.js';

const Photo = props => {return <li><img src = {props.url} alt = "" key = {props.id}/></li>}

export default Photo;