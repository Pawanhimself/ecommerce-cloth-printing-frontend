import { useParams } from 'react-router-dom';
import { useState } from 'react';
import products from '../../data/products';

const ProductCard = () => {
  const { category, index } = useParams();
  const productList = products[category.charAt(0).toUpperCase() + category.slice(1)];
  const product = productList?.[parseInt(index)];

  const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(product);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    setMessage('✅ Added to cart!');
  };

  const handleBuyNow = () => {
    alert('🛒 Proceeding to checkout...');
  };

  const handleEditDesign = () => {
    alert('🎨 Redirecting to design editor...');
  };

  if (!product) {
    return <div className="p-10 text-red-600 text-xl text-center">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover max-h-[500px]"
          />
        </div>

        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-3">{product.name}</h2>
            <p className="text-secondary text-2xl font-semibold mb-6">₹{product.price}</p>

            <p className="text-gray-600 mb-6">
              Premium cotton tee designed for comfort and durability. Perfect for everyday wear and custom prints.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-accent text-white py-3 rounded-lg text-lg hover:bg-orange-500 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-primary text-white py-3 rounded-lg text-lg hover:bg-indigo-700 transition"
              >
                Buy Now
              </button>

              <button
                onClick={handleEditDesign}
                className="w-full border border-primary text-primary py-3 rounded-lg text-lg hover:bg-primary hover:text-white transition"
              >
                Edit Design
              </button>
            </div>

            {message && <p className="mt-5 text-green-600 font-medium text-center">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;