import { ProductType } from "@/types/productType"
import Button from "./Button"
import Link from "next/link"

type ProductProps = {
    product: ProductType
}

export default function Product({ product } : ProductProps) {
    return(
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
                <p className="text-orange font-semibold" >R$ {product.price?.toFixed(2).replace('.',',')}</p>
                <Button text="Comprar"/>
            </div>
        </div>
    )
}