import { ProductType } from "@/types/productType";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "./Button";

type ProductDetailsProps = {
    product: ProductType;
    onClose: () => void;
}

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
    const addToCart = () => {
        const storedCart = localStorage.getItem('cart');
        const cartItems = storedCart ? JSON.parse(storedCart) : [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <div className="flex flex-col items-start pl-8">
            <div className='flex items-center justify-between mb-16 w-full'>
                <h1 className="text-xl font-bold">{product.name}</h1>
                <button onClick={onClose} className="text-right text-red-500 text-2xl">
                    <IoIosCloseCircle />
                </button>
            </div>
            <img src={product.image} alt={product.name} className="w-auto h-96 shadow-xl object-contain mb-6 rounded" />
            <p className="text-base w-2/3">{product.description}</p>
            <div className="flex items-center justify-between gap-12 mt-8">
                <p className="text-orange font-semibold text-xl">R$ {product.price?.toFixed(2).replace('.', ',')}</p>
                <Button text="Comprar" onClick={addToCart} />
            </div>
        </div>
    );
}
