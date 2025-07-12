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


const Product = () => {
  const [activeTab, setActiveTab] = useState('Men');

  const products = {
    Men: [
      {
        name: 'Ironclad Tee',
        price: 799,
        image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Stealth Black Tee',
        price: 899,
        image: 'https://images.meesho.com/images/products/348068497/whxpq_1200.jpg',
      },
      {
        name: 'Classic Fit Tee',
        price: 699,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqVj61qvdwXqbbUx6FtFVlxAOwDp0tlYKLV4ExBYeDtpJLZctE4OeYH_Q3uyi2QSzCEzOD-KPieTsyuhd7sh0cuzDx06xK3TG6Ew46lFE-Y0RSTn7aQtiLug',
      },
      {
        name: 'White Cotton Tee',
        price: 749,
        image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Urban Street Tee',
        price: 849,
        image: 'https://images.meesho.com/images/products/348068497/whxpq_1200.jpg',
      },
      {
        name: 'Slim Fit Gray Tee',
        price: 799,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqVj61qvdwXqbbUx6FtFVlxAOwDp0tlYKLV4ExBYeDtpJLZctE4OeYH_Q3uyi2QSzCEzOD-KPieTsyuhd7sh0cuzDx06xK3TG6Ew46lFE-Y0RSTn7aQtiLug',
      },
      {
        name: 'Minimal Logo Tee',
        price: 899,
        image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
      },
      {
        name: 'Retro Stripe Tee',
        price: 849,
        image: 'https://images.meesho.com/images/products/348068497/whxpq_1200.jpg',
      },
    ],
    Women: [
      {
        name: 'Floral Pink Tee',
        price: 749,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUmZ1m5Ep6v69jOnb0fF1P6WTa21COrL1ixuvu0YD3xL988ACvEtz0iXzNpQMDSiWTt_xxze3Gwlfc-W9L-RaEbJp7eTvZe9vfVEoIE-jdi4ldMzs6Cqp1eQ',
      },
      {
        name: 'White Cotton V-Neck',
        price: 699,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO2nbp5j8LdAVjq5rv0ENrDXDQvuc-1o-ZdeKS8X34AjYPfWZ2FQW9PcCngsCpyJjYJvLZpE33-st5WVBrNbDNskW-3v_UuLc2KutXH3k',
      },
      {
        name: 'Soft Gray Tee',
        price: 799,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-YI3wEud7aXjL8ReWawl5TFu7Xg3GrTvSdNqBgViax5esvg7G1Sntd_Omw0o811iCbfY6CBq1R4K5_8JFH3F7Y_GufndQiXUauqV__hcAxRCv3-OI2Y0I',
      },
      {
        name: 'Striped Crop Top',
        price: 899,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUmZ1m5Ep6v69jOnb0fF1P6WTa21COrL1ixuvu0YD3xL988ACvEtz0iXzNpQMDSiWTt_xxze3Gwlfc-W9L-RaEbJp7eTvZe9vfVEoIE-jdi4ldMzs6Cqp1eQ',
      },
      {
        name: 'Oversized Tee Dress',
        price: 849,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO2nbp5j8LdAVjq5rv0ENrDXDQvuc-1o-ZdeKS8X34AjYPfWZ2FQW9PcCngsCpyJjYJvLZpE33-st5WVBrNbDNskW-3v_UuLc2KutXH3k',
      },
      {
        name: 'Black Stretch Tee',
        price: 749,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-YI3wEud7aXjL8ReWawl5TFu7Xg3GrTvSdNqBgViax5esvg7G1Sntd_Omw0o811iCbfY6CBq1R4K5_8JFH3F7Y_GufndQiXUauqV__hcAxRCv3-OI2Y0I',
      },
      {
        name: 'Eco Fabric Tee',
        price: 799,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUmZ1m5Ep6v69jOnb0fF1P6WTa21COrL1ixuvu0YD3xL988ACvEtz0iXzNpQMDSiWTt_xxze3Gwlfc-W9L-RaEbJp7eTvZe9vfVEoIE-jdi4ldMzs6Cqp1eQ',
      },
      {
        name: 'Graphic Tee',
        price: 899,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO2nbp5j8LdAVjq5rv0ENrDXDQvuc-1o-ZdeKS8X34AjYPfWZ2FQW9PcCngsCpyJjYJvLZpE33-st5WVBrNbDNskW-3v_UuLc2KutXH3k',
      },
    ],
    Kids: [
      {
        name: 'Space Explorer Tee',
        price: 599,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSREdqaQNMyDvEVA6ergtJtrX3fSwPvQ7YgLf3pM0Cy6XdDGDWHE3LXTEHOcOHCJu6SK0LUxVhJC6l9ESFEz0Bj5YR2gu5gS1gapaI1CqcGn9T4ec6MUW_-Zw',
      },
      {
        name: 'Dinosaur Print Tee',
        price: 499,
        image: 'https://images.meesho.com/images/products/549319934/yfobj_1200.jpg',
      },
      {
        name: 'Cartoon Character Tee',
        price: 549,
        image: 'https://images.meesho.com/images/products/547425891/oyb2n_1200.jpg',
      },
      {
        name: 'Rainbow Unicorn Tee',
        price: 649,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSREdqaQNMyDvEVA6ergtJtrX3fSwPvQ7YgLf3pM0Cy6XdDGDWHE3LXTEHOcOHCJu6SK0LUxVhJC6l9ESFEz0Bj5YR2gu5gS1gapaI1CqcGn9T4ec6MUW_-Zw',
      },
      {
        name: 'Superhero Tee',
        price: 699,
        image: 'https://images.meesho.com/images/products/549319934/yfobj_1200.jpg',
      },
      {
        name: 'Blue Cotton Tee',
        price: 499,
        image: 'https://images.meesho.com/images/products/547425891/oyb2n_1200.jpg',
      },
      {
        name: 'Animal Friends Tee',
        price: 599,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSREdqaQNMyDvEVA6ergtJtrX3fSwPvQ7YgLf3pM0Cy6XdDGDWHE3LXTEHOcOHCJu6SK0LUxVhJC6l9ESFEz0Bj5YR2gu5gS1gapaI1CqcGn9T4ec6MUW_-Zw',
      },
      {
        name: 'Stars & Moon Tee',
        price: 599,
        image: 'https://images.meesho.com/images/products/549319934/yfobj_1200.jpg',
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">T-Shirt Collection</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-semibold transition duration-200 ${
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

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {products[activeTab]?.map((product, index) => (
          <Link
            to={`/product/${activeTab.toLowerCase()}/${index}`}
            key={index}
            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden"

        {products[activeTab].map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"

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

              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-primary mb-1">{product.name}</h3>
              <p className="text-gray-700 mb-2">₹{product.price}</p>
              <button className="bg-accent text-white w-full py-2 rounded hover:bg-orange-500 transition">
                Add to Cart
              </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Product;
