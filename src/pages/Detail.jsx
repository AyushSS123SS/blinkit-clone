import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Detail() {
  const {id}= useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } =useContext(CartContext);


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if(!product) {
    return <div className="flex items-center justify-center h-screen">Please Wait...</div>;
  }
  
  return (
    <div className="p-3 flex flex-col md:flex-row gap-6">
      <div className="flex-2">
        <img src={product.image} alt={product.title} className='w-full h-80 bg-white p-3 rounded-lg object-contain shadow' />
      </div>

      <div className="flex-2">
        <h2 className="text-3xl font-semibold mb-3">{product.title}</h2>
        <p className="text-gray-900 mb-4">{product.description}</p>
        <p className="text-green-500 font-bold text-2xl mb-4">${product.price}</p>
        <button 
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">ADD</button>
      </div>
    </div>
  )
}

export default Detail
