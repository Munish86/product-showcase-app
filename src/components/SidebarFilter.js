import React from 'react';
import './SidebarFilter.css';

function SidebarFilter({ categories, selectedCategory, setSelectedCategory, priceRange, setPriceRange }) {
  return (
    <div className="sidebar-filter">
      <h3>Filter</h3>

      <div className="filter-section">
        <label>Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label>Price Range:</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <span>Up to ${priceRange}</span>
      </div>
    </div>
  );
}

export default SidebarFilter;
