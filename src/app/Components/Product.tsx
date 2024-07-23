"use client";
import { ProductType } from "@/types/productType";
import Button from "./Button";
import Link from "next/link";
import { useState } from 'react';

type ProductProps = {
    product: ProductType;
}

export default function Product({ product }: ProductProps) {
    const [isBordered] = useState(false);

    const addToCart = () => {
        const storedCart = localStorage.getItem('cart');
        const cartItems = storedCart ? JSON.parse(storedCart) : [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <div className="flex flex-col gap-2 shadow-xl p-6 bg-[#FFF] rounded-md">
            <Link href={`/product/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain cursor-pointer transform transition duration-300 hover:scale-105"
                />
            </Link>
            <p className="font-semibold">{product.name}</p>
            <div className="flex items-center justify-between gap-4 w-full">
                <p className="text-orange font-semibold">R$ {product.price?.toFixed(2).replace('.', ',')}</p>
                <Button text="Comprar" isBordered={isBordered} onClick={addToCart} />
            </div>
        </div>
    );
}
