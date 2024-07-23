"use client";
import { ProductType } from "@/types/productType";
import Button from "./Button";
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import ProductDetails from './ProductDetails';

type ProductProps = {
    product: ProductType;
}

export default function Product({ product }: ProductProps) {
    const [showDetails, setShowDetails] = useState(false);

    const addToCart = () => {
        const storedCart = localStorage.getItem('cart');
        const cartItems = storedCart ? JSON.parse(storedCart) : [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <div className="flex flex-col gap-2 shadow-xl p-6 bg-white rounded-md">
            <div onClick={() => setShowDetails(true)} className="relative group cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-contain transform transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaEye className="text-white text-2xl" />
                </div>
            </div>
            <p className="font-semibold">{product.name}</p>
            <div className="flex items-center justify-between gap-4 w-full">
                <p className="text-orange font-semibold">R$ {product.price?.toFixed(2).replace('.', ',')}</p>
                <Button text="Comprar" onClick={addToCart} />
            </div>
            {showDetails && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowDetails(false)}></div>
                    <div className="fixed top-0 right-0 w-2/5 h-full bg-white shadow-lg p-4 overflow-y-auto flex flex-col z-50 transform transition-transform duration-300 translate-x-0">
                        <ProductDetails product={product} onClose={() => setShowDetails(false)} />
                    </div>
                </>
            )}
        </div>
    );
}
