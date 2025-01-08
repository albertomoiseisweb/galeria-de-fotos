import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Pesquisar fotos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button>
      <span role="img" aria-label="search">🔍</span>
    </button>
  </div>
);

export default SearchBar;
