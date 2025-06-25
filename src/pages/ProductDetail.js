// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <Link to="/" className="back-btn">← Back to Products</Link>

      <div className="product-detail-card">
        <img src={product.image} alt={product.title} />
        <div className="info">
          <h2>{product.title}</h2>
          <p className="category">Category: {product.category}</p>
          <p className="price">${product.price}</p>
          <p className="rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
          <p className="desc">{product.description}</p>
          <button onClick={() => alert('Item added to cart (dummy)!')} className="add-to-cart">
  🛒 Add to Cart
</button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
