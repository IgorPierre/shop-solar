"use client";
import { useEffect, useState } from 'react';
import { ProductType } from '@/types/productType';
import { IoIosCloseCircle } from 'react-icons/io';

type CartProps = {
    closeCart: () => void;
};

export default function Cart({ closeCart }: CartProps) {
    const [cartItems, setCartItems] = useState<ProductType[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const removeItem = (id: number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price ?? 0), 0);
    };

    const handleCheckout = () => {
        alert('Finalizar compra!');
    };

    return (
        <aside className="fixed top-0 right-0 w-2/5 h-full bg-white shadow-lg p-4 overflow-y-auto flex flex-col z-50">
            <div className='flex items-center justify-between mb-16'>
                <h2 className="text-2xl">Carrinho</h2>
                <button onClick={closeCart} className="text-right text-red-500 text-2xl">
                    <IoIosCloseCircle />
                </button>
            </div>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                <div>
                    <div className="flex-grow min-h-[70vh]">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p>R$ {item.price?.toFixed(2).replace('.', ',')}</p>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="text-red-500">Remover</button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                        <p className="text-lg font-semibold">Total: R$ {calculateTotal().toFixed(2).replace('.', ',')}</p>
                        <button
                            onClick={handleCheckout}
                            className="bg-orange text-white px-4 py-2 rounded hover:bg-light-orange"
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}

        </aside>
    );
}