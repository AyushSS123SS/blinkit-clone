import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const {
    cartItems,
    addToCart,
    
    updateItemQuantity,
    decreaseItemQuantity,
  } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-3"> Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-2 rounded shadow">
            <ProductCard product={product} />
            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 text-white px-2 py-2 rounded cursor hover:bg-green-700"
            >
              Add to Cart
            </button>
            {cartItems.some((item) => item.id === product.id) ? (
              <div className="flex items-centre gap-2">
                <button onClick={() => decreaseItemQuantity(product.id)}>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => updateItemQuantity(product.id)}>
                  +
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
