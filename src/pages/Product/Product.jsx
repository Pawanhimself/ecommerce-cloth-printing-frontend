import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products';

const Product = () => {
  const [activeTab, setActiveTab] = useState('Men');
  const [message, setMessage] = useState('');

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(product);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(''), 2000);
  };

  const handleBuyNow = () => {
    alert('🛒 Proceeding to checkout...');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        T-Shirt Collection
      </h1>

      <div className="flex justify-center gap-4 mb-12">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-semibold transition duration-200 shadow-sm text-lg ${
              activeTab === category
                ? 'bg-primary text-white'
                : 'bg-white text-primary border border-primary'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {message && (
        <div className="text-center text-green-600 font-medium mb-6">
          {message}
        </div>
      )}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products[activeTab].map((product, index) => (
          <div
            key={index}
            className="bg-white hover:shadow-2xl transition border border-gray-200 rounded-xl overflow-hidden block"
          >
            <Link to={`/product/${activeTab.toLowerCase()}/${index}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-bold text-primary mb-1 truncate">
                {product.name}
              </h3>
              <p className="text-gray-600 font-medium mb-3">₹{product.price}</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-accent text-white py-2 rounded text-sm font-semibold hover:bg-orange-500 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="bg-primary text-white py-2 rounded text-sm font-semibold hover:bg-indigo-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
