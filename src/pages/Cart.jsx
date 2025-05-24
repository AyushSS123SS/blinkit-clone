import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    decreaseItemQuantity,
    updateItemQuantity,
  } = useContext(CartContext);
 
  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        Your cart is empty
      </div>
    );
  }
  console.log("Cart Items:", cartItems);
  return (
    <div className="p-4 grid col-span-3">
      <h2 className="text-3xl font-bold mb-3">Your Cart</h2>
      <div className="grid gap-3">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 shadow-md hover:shadow-lg rounded-lg "
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-contain mb-3"
            />
            <div className="flex-2">
              <h2 className="text-xl font-medium mb-2">{item.title}</h2>
              <p className="text-green-600 font-bold mb-3">${item.price}</p>
              <div className="fex items-center gap-4 mb-4">
                <button
                  onClick={() => decreaseItemQuantity(item.id)}
                  className="px-2 py-2 bg-gray-400"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id)}
                  className="px-2 py-2 bg-gray-400"
                >
                +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
