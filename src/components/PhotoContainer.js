import React from 'react';
import '../App.css';
import Photo from '../components/Photo';

const PhotoContainer = props => {
    const results = props.data;
    let displayPhotos = results.map(photo => (<Photo key = {photo.id} url = {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />));
    
    return <div className = "photo-container"><ul>{displayPhotos}</ul></div>
};

export default PhotoContainer;