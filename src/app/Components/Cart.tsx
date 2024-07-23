"use client";
import { useEffect, useState } from 'react';
import { ProductType } from '@/types/productType';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';

type CartProps = {
    closeCart: () => void;
};

export default function Cart({ closeCart }: CartProps) {
    const [cartItems, setCartItems] = useState<ProductType[]>([]);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        setIsOverlayVisible(true);
        return () => setIsOverlayVisible(false);
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
        <>
            {isOverlayVisible && <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>}
            <aside className="fixed top-0 right-0 w-full sm:w-3/4 md:w-2/5 h-full bg-white shadow-lg p-4 overflow-y-auto flex flex-col z-50">
                <div className='flex items-center justify-between mb-4 md:mb-16'>
                    <h2 className="text-lg sm:text-xl md:text-2xl">Carrinho</h2>
                    <button onClick={closeCart} className="text-right text-red-500 text-xl sm:text-2xl">
                        <IoIosCloseCircle />
                    </button>
                </div>
                {cartItems.length === 0 ? (
                    <p className="text-sm sm:text-base">Seu carrinho está vazio</p>
                ) : (
                    <div className="flex-grow">
                        <div className="min-h-[50vh] md:min-h-[70vh]">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between items-center mb-4">
                                    <img src={item.image} alt={item.name} className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 object-cover" />
                                    <div className="flex-1 ml-2 sm:ml-4">
                                        <p className="font-semibold text-xs sm:text-sm md:text-base">{item.name}</p>
                                        <p className="text-xs sm:text-sm md:text-base">R$ {item.price?.toFixed(2).replace('.', ',')}</p>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className="text-red-500 text-xs sm:text-sm md:text-base"><FaRegTrashAlt /></button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row gap-4 md:items-center justify-between border-t pt-4">
                            <p className="text-base sm:text-lg font-semibold">Total: R$ {calculateTotal().toFixed(2).replace('.', ',')}</p>
                            <button
                                onClick={handleCheckout}
                                className="bg-orange text-white px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-light-orange"
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
}