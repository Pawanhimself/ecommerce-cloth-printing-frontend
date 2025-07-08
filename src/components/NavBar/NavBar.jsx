import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold">
      T-Shirt
    </Link>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/home" className="hover:text-gray-300">Shop</Link>
      <Link to="/sell" className="hover:text-gray-300">About</Link>
      <Link to="/contact" className="hover:text-gray-300">Contact</Link>
    </div>
  </nav>
);

export default NavBar;