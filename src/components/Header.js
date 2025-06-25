import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="brand-name">ShopEase</h1>
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
}

export default Header;
