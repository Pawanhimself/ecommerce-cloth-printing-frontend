
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className=" bg-primary text-white px-6 py-4 flex justify-between items-center">
    <div>
    <Link to="/" className="text-xl font-bold">
      T-Shirt
    </Link>
    </div>
    <div className="space-x-6">
      <Link to="/" className="hover:text-accent transition">Home</Link>
      <Link to="/home" className="hover:text-accent transition">Shop</Link>
      <Link to="/sell" className="hover:text-accent transition">About</Link>
      <Link to="/contact" className="hover:text-accent transition">Contact</Link>
    </div>
  </nav>
);

export default NavBar;