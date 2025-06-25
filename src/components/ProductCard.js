import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="rating">⭐ {product.rating.rate} / 5</p>
        <button className="btn">View Details</button>
      </div>
    </div>
  );
}

export default ProductCard;
