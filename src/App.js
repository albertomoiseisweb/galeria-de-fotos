import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import Footer from './components/Footer';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Substitua pela sua API ou dados locais
    fetch('https://api.unsplash.com/photos?client_id=YOUR_ACCESS_KEY')
      .then((res) => res.json())
      .then((data) =>
        setPhotos(data.map((photo) => ({
          id: photo.id,
          url: photo.urls.small,
          title: photo.alt_description || 'Sem título',
        })))
      );
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PhotoGrid photos={filteredPhotos} />
      <Footer />
    </div>
  );
};

export default App;
