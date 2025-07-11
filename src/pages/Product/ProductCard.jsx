import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import products from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductCard = () => {
  const { category, index } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const productList = products[category.charAt(0).toUpperCase() + category.slice(1)];
  const product = productList?.[parseInt(index)];
  const [message, setMessage] = useState('');
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (item) => {
    addToCart({ ...item, size, quantity });
    setMessage(`Added to cart! Size: ${size}, Qty: ${quantity}`);
    setTimeout(() => setMessage(''), 2000);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, size, quantity });
    navigate('/cart');
  };

  const handleEditDesign = () => {
    alert('Redirecting to design editor...');
  };

  if (!product) {
    return <div className="p-10 text-red-600 text-xl text-center">Product not found.</div>;
  }

  const allSuggestions = Object.values(products)
    .flat()
    .filter((p) => p.name !== product.name);
  const suggestions = allSuggestions.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row mb-12">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover max-h-[500px]"
          />
        </div>

        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-3">{product.name}</h2>
            <p className="text-secondary text-2xl font-semibold mb-6">₹{product.price}</p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Size</label>
              <div className="flex gap-2 flex-wrap">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-1 border rounded ${
                      size === s ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-24 border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleAddToCart(product)}
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

      {/* Suggestions Section */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-primary mb-6">Suggested for You</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {suggestions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-primary mb-1 truncate">{item.name}</h4>
                <p className="text-gray-600 font-medium mb-2">₹{item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-accent text-white py-2 rounded hover:bg-orange-500 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
