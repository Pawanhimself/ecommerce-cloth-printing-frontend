import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../../src/context/CartContext';

const NavBar = () => {
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        T-Shirt
      </Link>

      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-accent transition">Home</Link>
        <Link to="/home" className="hover:text-accent transition">Shop</Link>
        <Link to="/sell" className="hover:text-accent transition">About</Link>
        <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        <Link to="/cart" className="relative hover:text-accent transition text-xl">
          <FaShoppingCart />
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {totalQty}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
