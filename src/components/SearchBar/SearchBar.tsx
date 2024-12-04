import React from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-button">
        <i className="fa fa-search"></i> {/* Icône de recherche */}
      </button>
    </div>
  );
};

export default SearchBar;
