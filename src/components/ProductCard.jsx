import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white p-5 shadow-md hover:shadow-lg rounded-lg transition">
        <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title}  className='h-60 w-full object-contain mb-5'/>
        <h2 className="text-sm-3xl mb-3 font-bold">{product.title}</h2>
        <p className="text-green-600 font-bold mb-3">${product.price}</p>
        <button className="bg-green-100 text-green-500 py-1 px-2 rounded hover:bg-green-600">View</button>
        </Link>
    </div>
  );
}

export default ProductCard
