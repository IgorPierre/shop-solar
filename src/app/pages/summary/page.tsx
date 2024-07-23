"use client";
import { useEffect, useState } from 'react';
import { ProductType } from '@/types/productType';
import { useRouter } from 'next/navigation';

export default function Summary() {
    const [cartItems, setCartItems] = useState<ProductType[]>([]);
    const router = useRouter();

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price ?? 0), 0);
    };

    const handleConfirmOrder = () => {
        localStorage.removeItem('cart');
        router.push('/');
    };

    return (
        <div className="w-1/2 max-w-7xl mx-auto p-4 flex flex-col justify-between">
            <h1 className="text-dark-orange text-4xl mb-4 font-semibold">Resumo do Pedido</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                <>
                    <div className="mb-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                                <div className="flex-1 ml-2">
                                    <p className="font-semibold">{item.name}</p>
                                    <p>R$ {item.price?.toFixed(2).replace('.', ',')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <p className="text-lg font-semibold">Total: R$ {calculateTotal().toFixed(2).replace('.', ',')}</p>
                        <button
                            onClick={handleConfirmOrder}
                            className="mt-4 bg-orange text-white px-4 py-2 rounded hover:bg-light-orange"
                        >
                            Confirmar Pedido
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}