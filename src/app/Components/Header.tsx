"use client";
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';
import Link from 'next/link';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const cartItems = JSON.parse(storedCart);
      setCartItemCount(cartItems.length);
    }
  }, [isCartOpen]);

  return (
    <header className="max-w-7xl mx-auto p-4 flex items-center justify-between">
      <Link href='/'>
        <img className="w-32" src="images/logo.png" alt="Logo" />
      </Link>
      <div className="relative">
        <button onClick={toggleCart} className="relative text-orange text-2xl">
          <FaShoppingCart size={24} />
          {cartItemCount > 0 && (
            <span className="absolute bottom-3 left-5 bg-cyan-900 text-white text-xs font-bold rounded-full px-1 py-0">
              {cartItemCount}
            </span>
          )}
        </button>
        {isCartOpen && <Cart closeCart={toggleCart} />}
      </div>
      {isCartOpen && <Cart closeCart={toggleCart} />}
    </header>
  );
}