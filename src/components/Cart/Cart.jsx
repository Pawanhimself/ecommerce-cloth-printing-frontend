import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 lg:px-8 xl:px-16">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600 text-center mt-10">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.name}-${item.size}-${index}`}
                  className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-md transition overflow-hidden flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">Size: {item.size}</p>
                    <p className="text-sm text-gray-500 mb-1">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      ₹{item.price} each
                    </p>

                    <div className="flex justify-between items-center mt-auto">
                      <div className="text-base font-semibold text-gray-800">
                        ₹{item.price * item.quantity}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.name, item.size)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
              <span className="text-2xl font-bold text-primary">₹{totalPrice}</span>
            </div>

            <div className="max-w-5xl mx-auto mt-6">
              <button className="w-full bg-primary hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition text-lg">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
