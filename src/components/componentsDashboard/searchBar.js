// components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  const handleSearch = (query) => {
    // Implement search functionality here
    console.log('Search query:', query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
