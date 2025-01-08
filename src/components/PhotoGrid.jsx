import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos }) => (
  <div className="photo-grid">
    {photos.length > 0 ? (
      photos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
    ) : (
      <p>Nenhuma foto encontrada</p>
    )}
  </div>
);

export default PhotoGrid;
