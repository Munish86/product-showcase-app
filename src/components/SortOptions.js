import React from 'react';
import './SortOptions.css';

function SortOptions({ sortOption, setSortOption }) {
  return (
    <div className="sort-options">
      <label>Sort by: </label>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Default</option>
        <option value="price">Price (Low → High)</option>
        <option value="rating">Rating</option>
        <option value="name">Name (A-Z)</option>
      </select>
    </div>
  );
}

export default SortOptions;
