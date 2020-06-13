import React from 'react';
import '../App.css';
import Photo from '../components/Photo';

const TagSearch =  ({match}, props) => {
    const tag = this.tags.find((tag) => {return match.params.tags === tag})
    const results = props.data;
    let displayPhotos = results.map(photo => (<Photo key = {photo.id} url = {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />)); 
    return <div className = "photo-container">
        {match.isExact && <><h3>{tag}</h3></>}{displayPhotos}</div>
};

export default TagSearch;