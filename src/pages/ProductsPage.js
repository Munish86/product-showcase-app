import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SidebarFilter from '../components/SidebarFilter';
import SortOptions from '../components/SortOptions';
import './ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayed(data);
        const allCategories = [...new Set(data.map((p) => p.category))];
        setCategories(allCategories);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    filtered = filtered.filter((p) => p.price <= priceRange);

    // Sort
    if (sortOption === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sortOption === 'name') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setDisplayed(filtered);
  }, [products, selectedCategory, priceRange, sortOption]);

  return (
    <div className="products-wrapper">
      <SidebarFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div className="products-content">
        <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
        <div className="products-grid">
          {displayed.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
