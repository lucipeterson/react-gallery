import React from 'react';
import '../App.css';

const NotFound = (props) => {
    if (props.searchExists === false) {return null}
    return <li className = "not-found"><h3>No Results Found</h3><p>Your search did not return any results. Please try again.</p></li>}

export default NotFound;