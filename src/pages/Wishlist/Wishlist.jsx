import React from 'react';
import { useCart } from '../../context/CartContext';
import { HeartOff, ShoppingCart } from 'lucide-react';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-600 text-center py-20">
            <HeartOff className="w-12 h-12 mb-4 text-red-400" />
            <p className="text-lg">Your wishlist is currently empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-md transition overflow-hidden flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-primary mb-1 truncate">{item.name}</h2>
                  <p className="text-gray-700 font-medium mb-4">₹{item.price}</p>

                  <button
                    onClick={() => addToCart({ ...item, size: 'M', quantity: 1 })}
                    className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition mb-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>

                  <button
                    onClick={() => toggleWishlist(item)}
                    className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 py-2 rounded-md transition font-medium"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
