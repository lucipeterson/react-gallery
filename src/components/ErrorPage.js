import React from 'react';
import '../App.css';

const ErrorPage = () => {
    return <ul>
        <li className = "not-found"><h1>Page Not Found</h1><p>This page does not exist.</p></li>
        <a href = '/'><h3>Return Home</h3></a>
        </ul>
}

export default ErrorPage;