import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const Product = () => {
  const [activeTab, setActiveTab] = useState('Men');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
        T-Shirt Collection
      </h1>

      {/* Category Tabs */}
      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full border font-medium transition duration-200 text-sm md:text-base ${
              activeTab === category
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products[activeTab]?.map((product, index) => (
          <Link
            to={`/product/${activeTab.toLowerCase()}/${index}`}
            key={index}
            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-indigo-700">{product.name}</h3>
              <p className="text-gray-800 font-medium text-sm">₹{product.price}</p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart({ ...product, size: 'M', quantity: 1 });
                }}
                className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded transition"
              >
                Add to Cart
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart({ ...product, size: 'M', quantity: 1 });
                  navigate('/cart');
                }}
                className="text-center text-white text-sm bg-indigo-600 hover:bg-indigo-700 py-2 rounded transition"
              >
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
