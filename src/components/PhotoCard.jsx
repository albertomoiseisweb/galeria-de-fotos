import React from 'react';

const PhotoCard = ({ photo }) => (
  <div className="photo-card">
    <img src={photo.url} alt={photo.title} />
    <p>{photo.title}</p>
  </div>
);

export default PhotoCard;
