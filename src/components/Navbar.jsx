import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <nav className="bg-white shadow-md p-7">
      <div className="container mx-auto flex justify-between items-centre">
        <h1 className="text-4xl font-bold text-gray-900">Blinkit</h1>

        <div className="space-x-4">
          <Link to="/" className="text-gray-900 hover:text-green-400">
            {" "}
            Home
          </Link>
          <Link to="/cart" className="text-gray-900 hover:text-green-400">
            {" "}
            Cart({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
